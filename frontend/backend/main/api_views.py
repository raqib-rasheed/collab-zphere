import random
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError
from rest_framework.generics import GenericAPIView
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin
from rest_framework_api_key.permissions import HasAPIKey, KeyParser
from rest_framework_api_key.models import APIKey
from user import models as user_models
from . import serializers
from . import models
from . import permissions
from . import utils

User = get_user_model()


class LeadListView(GenericAPIView):
    """
    not tested
    """

    authentication_classes = [
        TokenAuthentication,
    ]
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = serializers.LeadsListSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        return Response(data)


"""
test condictions
pass invalid timezone
pass past dates
check clockedschedule created
check periodictask created
check maintask creation
check time is saved correctly 10:24 am in asia/calcutta == 4:54 in utc
"""


class TaskViewSet(ModelViewSet):
    """
    check the datetime if it is less than today dont save
    """

    authentication_classes = [
        TokenAuthentication,
    ]
    permission_classes = [IsAuthenticated, permissions.IsUserOwnerOfObject]
    serializer_class = serializers.TaskSerializer

    def get_queryset(self):
        return models.Task.objects.filter(workspace__user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        timezone = data.get(
            "timezone", None
        )  # if timezone is not passed then your profile time is taken
        data.update({"leads_email": ",".join(map(str, request.data.get("leads", [])))})
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, timezone)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def perform_update(self, serializer):
        timezone = serializer.validated_data["timezone"]
        utc_time, is_valid = utils.convert_and_validate(
            serializer.validated_data["datetime"], timezone
        )
        if not is_valid:
            raise ValidationError({"datetime": "You cannot set past date and time!"})
        serializer.validated_data["datetime"] = utc_time
        serializer.save()

    def perform_create(self, serializer, timezone):
        # workspace, _ = models.Workspace.objects.get_or_create(user = self.request.user, name = models.Workspace.DEFAULT_NAME)
        workspace, _ = utils.get_or_create_workspace(
            self.request.user, name=models.Workspace.DEFAULT_NAME
        )
        # we need to change the timezone according to the user location
        if not timezone:
            timezone = self.reqeust.user.profile.timezone

        utc_time, is_valid = utils.convert_and_validate(
            serializer.validated_data["datetime"], timezone
        )
        if not is_valid:
            raise ValidationError({"datetime": "You cannot set past date and time!"})
        serializer.validated_data["datetime"] = utc_time
        serializer.save(workspace=workspace, timezone=timezone)


class WorkspaceViewSet(CreateModelMixin, RetrieveModelMixin, GenericViewSet):
    authentication_classes = [
        TokenAuthentication,
    ]
    permission_classes = [IsAuthenticated, permissions.IsUserOwnerOfObject]
    node_serializer = serializers.NodeSerializer
    edge_serializer = serializers.EdgeSerializer
    serializer_class = serializers.WorkspaceSerializer
    data_serializer = serializers.DataSerializer

    new_version = None

    def get_node_serializer(self, *args, **kwargs):
        kwargs.setdefault("context", self.get_serializer_context())
        return self.node_serializer(*args, **kwargs)

    def get_edge_serializer(self, *args, **kwargs):
        kwargs.setdefault("context", self.get_serializer_context())
        return self.edge_serializer(*args, **kwargs)

    def get_data_serializer(self, *args, **kwargs):
        kwargs.setdefault("context", self.get_serializer_context())
        return self.data_serializer(*args, **kwargs)

    def save_nodes(self, nodes):
        # models.Nodes.objects.filter(chatbot=cb).delete()
        nodes_queryset = models.Node.objects.filter(bot=self.bot)
        node_ids_before_save = nodes_queryset.values_list("node_id", flat=True)
        node_ids_after_save = []

        list_datas = []
        for node in nodes:
            assert "data" in node, "You need to provide data in node."
            assert "id" in node, "You need to provide id in node."
            assert "position" in node, "You need to provide positio in node"

            node_ids_after_save.append(node["id"])
            node_object = None
            try:
                id = node["id"]
                # if node_object is found we will update the data else we will create a new data
                node_object = nodes_queryset.get(node_id=id)
            except models.Node.DoesNotExist:
                pass
            label = node["data"].get("label", None)
            data = {
                "data": node["data"],
                "position_x": node["position"]["x"],
                "position_y": node["position"]["y"],
                "saved_version": self.new_version,
                "node_id": node["id"],
                "type": node["type"],
                "bot": self.bot.id,
            }
            if node_object:
                s = self.get_node_serializer(
                    data=data, instance=node_object, partial=True
                )
                s.is_valid(raise_exception=True)
                s.save()
            else:
                list_datas.append(data)
        s = self.get_node_serializer(data=list_datas, many=True)
        s.is_valid(raise_exception=True)
        s.save()

        deleted_node_ids = []
        for i in node_ids_before_save:
            if not i in node_ids_after_save:
                deleted_node_ids.append(i)
        # delete old nodes
        for id in deleted_node_ids:
            nodes_queryset.get(node_id=id).delete()

    def save_edges(self, edges):
        edge_queryset = models.Edge.objects.filter(bot=self.bot)
        list_data = []
        for edge in edges:
            ed = None
            assert "id" in edge, "You need to provide id in Edge."
            assert "source" in edge, "You need to provide source in Edge."
            assert "target" in edge, "You need to provide target in Edge."
            assert "sourceHandle" in edge, "You need to provide sourceHandle in Edge."
            assert "targetHandle" in edge, "You need to provide targetHandle in Edge."
            data_object = None
            try:
                data_object = edge_queryset.get(edge_id=edge["id"])
            except models.Edge.DoesNotExist:
                pass
            data = {
                "source": edge["source"],
                "target": edge["target"],
                "sourceHandle": edge["sourceHandle"],
                "targetHandle": edge["targetHandle"],
                "animated": edge.get("animated", False),
                "label": edge.get("label", None),
                "bot": self.bot.id,
                # "type": edge["type"],
                "saved_version": self.new_version,
                "edge_id": edge["id"],
            }
            if data_object:
                s = self.get_edge_serializer(
                    data=data, instance=data_object, partial=True
                )
                s.is_valid(raise_exception=True)
                s.save()
            else:
                list_data.append(data)
        serializer = self.get_edge_serializer(data=list_data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        edge_queryset.exclude(saved_version=self.new_version).delete()

    def save_datas(self, datas):
        data_queryset = models.Data.objects.filter(bot=self.bot)
        list_data = []
        print(datas)
        for data in datas:
            assert "nodeId" in data, "You need to pass nodeId with data."
            assert "componentName" in data, "You need to pass component name with data."
            data_object = None
            try:
                data_object = data_queryset.get(node_id=data["nodeId"])
            except models.Data.DoesNotExist:
                pass
            data = {
                "node_id": data["nodeId"],
                "component_name": data["componentName"],
                "data": data["data"],
                "bot": self.bot.id,
                "saved_version": self.new_version,
            }
            if data_object:
                s = self.get_data_serializer(
                    data=data, instance=data_object, partial=True
                )
                s.is_valid(raise_exception=True)
                s.save()
            else:
                list_data.append(data)
        serializer = self.get_data_serializer(data=list_data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data_queryset.exclude(saved_version=self.new_version).delete()

    def create(self, request, *args, **kwargs):
        self.bot = models.Bot.objects.get(id=kwargs.get("bot_id"))
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        self.new_version = random.randrange(10000, 99999, 5)
        try:
            self.save_nodes(serializer.data["nodes"])
            self.save_edges(serializer.data["edges"])
            self.save_datas(serializer.data["datas"])
        except AssertionError as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        headers = self.get_success_headers(serializer.data)
        return Response("success", status=status.HTTP_200_OK, headers=headers)

    def get(self, request, *args, **kwargs):
        bot = models.Bot.objects.get(id=kwargs.get("bot_id"))
        node_queryset = models.Node.objects.filter(bot=bot)
        edge_queryset = models.Edge.objects.filter(bot=bot)
        data_queryset = models.Data.objects.filter(bot=bot)

        nodes = self.get_node_serializer(node_queryset, many=True).data
        edges = self.get_edge_serializer(edge_queryset, many=True).data
        datas = self.get_data_serializer(data_queryset, many=True).data

        ResponseData = {
            "nodes": nodes,
            "edges": edges,
            "datas": datas,
        }
        return Response(ResponseData)


class TemplateVaribles(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        temp_template_variables = []
        for key in utils.template_variables:
            temp_template_variables.append(
                {
                    "value": utils.template_variables[key]["data_value"],
                    "id": utils.template_variables[key]["data_id"],
                }
            )
        return Response(temp_template_variables)

class WebhookView(GenericAPIView):
    permission_classes = [HasAPIKey, ]
    STATUSCHANGE = "Status Change"
    SENDPROPOSAL = "Send Proposal"
    NEWCLIENT = "New Client"
    #conditions
    EQUALTO="Equal to"

    #actions
    SENDEMAIL="Send Email"

    prev_node = None
    edges = None
    prev_node = None

    keyparser = KeyParser()
    serializer_class = serializers.WebhookSerializer

    def check_if_condition(self, value):
        return value in [self.EQUALTO, ]
    
    def check_if_trigger(self, value):
        return value in [self.STATUSCHANGE, self.SENDPROPOSAL, self.NEWCLIENT]
    
    def check_if_action(self, value):
        return value in (self.SENDEMAIL, )

    def get_key(self, request):
        return self.keyparser.get(request)

    def get_response(self):
        if self.prev_node:
            edge = self.edges.get(source=self.prev_node.node_id)
        else:
            edge = self.edges.get(source="1")

        target_id = edge.target
        target_node = self.nodes.get(node_id=target_id)
        if target_node.data["label"] == "Send email":
            print("an email is sent ")
        return "Success"

    def get_next_node(self, source_node, nodes):
        '''
        this function returns the next target node
        '''
        # i'm using target here becaue left is source and right is target
        # so if a trigger node connects to a condition from right side of trigger node we can say that the trigger node is target
        # and the next node is source
        edge = models.Edge.objects.get(target = source_node.node_id)
        target_node = nodes.get(node_id = edge.source) # we need to get the source node
        return target_node

    def trigger_function(self, node, nodes):
        """
        trigger function job is to return the next connected node
        """
        target_node = self.get_next_node(node, nodes)
        return target_node

    def condition_function(self, node, nodes, data):
        '''
        this function will always returns an action node else none
        '''
        node_data = models.Data.objects.get(node_id = node.node_id)
        if node.data['label'] == self.EQUALTO:
            if node_data.data['value'] == data['data'][node_data.data['parameter']]:
                target_node = self.get_next_node(node, nodes)
                if self.check_if_action(target_node.data['label']):
                    try:
                        self.get_next_node(target_node, nodes)
                    except models.Edge.DoesNotExist:
                        return target_node 
                elif self.check_if_condition(target_node.data['label']):
                    return self.condition_function(target_node, nodes, data)
        return None
    
    def action_function(self, node):
        if node.data['label'] == self.SENDEMAIL:
            print('email is sending')

    def run_bot(self, bots, data):
        for bot in bots:
            nodes = bot.node_set.all()
            for node in nodes:
                if self.check_if_trigger(node.data['label']):
                    if node.data['label'] == data['trigger_label']:
                        target_node = self.trigger_function(node, nodes)
                        if self.check_if_condition(target_node.data['label']):
                            target_node = self.condition_function(target_node, nodes, data)
                            if target_node:
                                self.action_function(target_node)
                        elif self.check_if_action(target_node.data['label']):
                            self.action_function(target_node)


    def post(self, request, *args, **kwargs):
        key = self.get_key(request)
        api_key_object = APIKey.objects.get_from_key(key)
        profile = user_models.Profile.objects.get(api_key = api_key_object)
        user = User.objects.get(profile = profile)
        workspace = models.Workspace.objects.get(user = user)
        bots = workspace.bot_set.all()
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        self.run_bot(bots, serializer.data)
        # for bot in bots:
        #     nodes = bot.node_set.all()
        #     for node in nodes:
        #         if node.data['label'] == serializer.trigger_label:
        #             edge = models.Edge.objects.get(source = node.node_id)
        #             target_node = nodes.get(node_id = edge.target)
        #             target_node_datas = models.Data.objects.get(node_id = target_node.node_id)
        #             if target_node.data['label'] == self.EQUALTO:
        #                 if target_node_datas.data['parameter'] == 'name':
        #                     if target_node_datas.data['value'] == serializer.data['data']['name']:
        #                         next_edge = models.Edge.objects.get(source = target_node.node_id)
        #                         next_node = nodes.get(node_id = next_edge.target)
        #                         if next_node.data['label'] == self.SENDEMAIL:
        #                             print('email sending')


        self.edges = models.Edge.objects.all()
        self.nodes = models.Node.objects.all()
        # response = self.get_response()

        return Response(
            {
                "status": "done",
            },
            status=status.HTTP_200_OK,
        )


class BotViewSet(ModelViewSet):
    authentication_classes = [
        TokenAuthentication,
    ]
    permission_classes = [IsAuthenticated, permissions.IsUserOwnerOfObject]
    serializer_class = serializers.BotSerializer

    def perform_create(self, serializer):
        workspace, _ = utils.get_or_create_workspace(
            self.request.user, models.Workspace.DEFAULT_NAME
        )
        serializer.save(workspace=workspace)

    def get_queryset(self):
        return models.Bot.objects.all()
