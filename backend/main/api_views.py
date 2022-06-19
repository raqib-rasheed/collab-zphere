import random
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError
from rest_framework.generics import GenericAPIView
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin
from . import serializers
from .  import models
from . import permissions
from . import utils
class LeadListView(GenericAPIView):
    """
    not tested
    """
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]
    serializer_class = serializers.LeadsListSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        return Response(data)

'''
test condictions
pass invalid timezone
pass past dates
check clockedschedule created
check periodictask created
check maintask creation
check time is saved correctly 10:24 am in asia/calcutta == 4:54 in utc
'''
class TaskViewSet(ModelViewSet):
    """
    check the datetime if it is less than today dont save
    """
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, permissions.IsUserOwnerOfObject]
    serializer_class = serializers.TaskSerializer

    def get_queryset(self):
        return models.Task.objects.filter(workspace__user = self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        timezone = data.get('timezone', None) # if timezone is not passed then your profile time is taken
        data.update({
            'leads_email': ','.join(map(str,request.data.get('leads', [])))
        })
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, timezone)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_update(self, serializer):
        timezone = serializer.validated_data['timezone']
        utc_time, is_valid = utils.convert_and_validate(serializer.validated_data['datetime'], timezone)
        if not is_valid:
            raise ValidationError({'datetime': "You cannot set past date and time!"})
        serializer.validated_data['datetime'] = utc_time
        serializer.save()


    def perform_create(self, serializer, timezone):
        workspace, _ = models.Workspace.objects.get_or_create(user = self.request.user, name = models.Workspace.DEFAULT_NAME)
        # we need to change the timezone according to the user location
        if not timezone:
            timezone = self.reqeust.user.profile.timezone
        
        utc_time, is_valid = utils.convert_and_validate(serializer.validated_data['datetime'], timezone)
        if not is_valid:
            raise ValidationError({'datetime': "You cannot set past date and time!"})
        serializer.validated_data['datetime'] = utc_time
        serializer.save(workspace = workspace, timezone = timezone)


class WorkspaceViewSet(CreateModelMixin, RetrieveModelMixin, GenericViewSet):
    
    node_serializer = serializers.NodeSerializer
    edge_serializer = serializers.EdgeSerializer
    serializer_class = serializers.WorkspaceSerializer

    new_version = None
    
    def get_node_serializer(self, *args, **kwargs):
        kwargs.setdefault("context", self.get_serializer_context())
        return self.node_serializer(*args, **kwargs)
        
    def get_edge_serializer(self, *args, **kwargs):
        kwargs.setdefault("context", self.get_serializer_context())
        return self.edge_serializer(*args, **kwargs)

    def save_nodes(self, nodes):
        # models.Nodes.objects.filter(chatbot=cb).delete()
        nodes_queryset = models.Node.objects.all()
        node_ids_before_save = nodes_queryset.values_list('node_id', flat = True)
        node_ids_after_save = []

        list_datas = []
        for node in nodes:
            assert "data" in node, "You need to provide data in node."
            assert "id" in node, "You need to provide id in node."
            assert "position" in node, "You need to provide positio in node"

            node_ids_after_save.append(node['id'])
            node_object = None
            try:
                id = node['id']
                # if node_object is found we will update the data else we will create a new data
                node_object = nodes_queryset.get(node_id = id)
            except models.Node.DoesNotExist:
                pass
            label = node["data"].get("label", None)
            data = {
                "data": node["data"],
                "position_x": node["position"]["x"],
                "position_y": node["position"]["y"],
                "saved_version": self.new_version,
                "node_id": node["id"],
            }
            if node_object:
                s = self.get_node_serializer(data = data, instance = node_object, partial = True)
                s.is_valid(raise_exception = True)
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
            nodes_queryset.get(node_id = id).delete()

    
    def save_edges(self, edges):
        edge_queryset = models.Edge.objects.all()
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
                data_object = edge_queryset.get(edge_id = edge['id'])
            except models.Edge.DoesNotExist:
                pass
            data = {
                "source": edge["source"],
                "target": edge["target"],
                "sourceHandle": edge["sourceHandle"],
                "targetHandle": edge["targetHandle"],
                "animated": edge.get("animated", False),
                "label": edge.get("label", None),
                # "type": edge["type"],
                "saved_version": self.new_version,
                "edge_id": edge["id"],
            }
            if data_object:
                s = self.get_edge_serializer(data = data, instance = data_object, partial = True)
                s.is_valid(raise_exception = True)
                s.save()
            else:
                list_data.append(data)
        serializer = self.get_edge_serializer(data=list_data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        edge_queryset.exclude(saved_version = self.new_version).delete()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        self.new_version = random.randrange(10000, 99999, 5)
        try:
            self.save_nodes(serializer.data["nodes"])
            self.save_edges(serializer.data["edges"])
        except AssertionError as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        headers = self.get_success_headers(serializer.data)
        return Response("success", status=status.HTTP_200_OK, headers=headers)


    def get(self, request, *args, **kwargs):
        node_queryset = models.Node.objects.all()
        edge_queryset = models.Edge.objects.all()

        nodes = self.get_node_serializer(node_queryset, many=True).data
        edges = self.get_edge_serializer(edge_queryset, many=True).data

        ResponseData = {
            "nodes": nodes,
            "edges": edges,
        }
        return Response(ResponseData)

class TemplateVaribles(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        temp_template_variables = []
        for key in utils.template_variables:
            temp_template_variables.append({
                'value': utils.template_variables[key]['data_value'],
                'id': utils.template_variables[key]['data_id']
            })
        return Response(temp_template_variables)

class WebhookView(APIView):

    prev_node = None
    edges = None
    prev_node = None

    def get_response(self):
        if self.prev_node:
            edge = self.edges.get(source = self.prev_node.node_id)
        else:
            edge = self.edges.get(source = "1")
        
        target_id = edge.target
        target_node = self.nodes.get(node_id = target_id)
        if target_node.data['label'] == "Send email":
            print('an email is sent ')
        return 'Success'


    def post(self, request, *args, **kwargs):
        self.edges = models.Edge.objects.all()
        self.nodes = models.Node.objects.all()
        response = self.get_response()

        return Response({
            'value': response,
        }, status = status.HTTP_200_OK)
