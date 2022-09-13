from rest_framework import serializers
from . import models
from django.conf import settings
from django.db import connections
from backend import mysqlutils

from . import utils
class WorkspaceSerializer(serializers.Serializer):
    nodes = serializers.JSONField()
    edges = serializers.JSONField()
    datas = serializers.JSONField()

class NodeListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        nodes = [models.Node(**item) for item in validated_data]
        return models.Node.objects.bulk_create(nodes)

class NodeSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source="node_id")
    position = serializers.SerializerMethodField()
    position_x = serializers.FloatField(write_only=True)
    position_y = serializers.FloatField(write_only=True)
    node_id = serializers.CharField(write_only=True)

    def get_position(self, model):
        return {"x": model.position_x, "y": model.position_y}

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

    class Meta:
        model = models.Node
        list_serializer_class = NodeListSerializer
        fields = [
            "id",
            "position",
            "data",
            'type',
            "saved_version",
            "position_x",
            "position_y",
            "node_id",
            'bot',
        ]
        extra_kwargs = {
            "saved_version": {"write_only": True},
            "reply": {"write_only": True},
        }


class EdgeSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source="edge_id")

    class Meta:
        model = models.Edge
        fields = [
            "id",
            "target",
            "source",
            "targetHandle",
            "sourceHandle",
            "animated",
            "label",
            "edge_id",
            "saved_version",
            'bot',
        ]
        extra_kwargs = {
            "edge_id": {"write_only": True},
            "saved_version": {"write_only": True},
        }


class LeadsListSerializer(serializers.Serializer):
    # created_by = serializers.IntegerField()

    def validate(self, attrs):
        user = self.context['request'].user
        data = None
        with connections[settings.ZPHERE_DB_NAME].cursor() as cursor:
            cursor.execute(f'SELECT email, name FROM leads WHERE created_by = "{user.profile.zphere_user_id}"')
            data = mysqlutils.dictfetchall(cursor)
            

        return data

class WorkspaceModelSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ('id', 'user')
        model = models.Workspace

class TaskSerializer(serializers.ModelSerializer):
    workspace = WorkspaceModelSerializer(read_only = True)
    timezone = serializers.CharField()
    leadEmails= serializers.SerializerMethodField() # this will be returned when we call client
    isActive = serializers.BooleanField(source = "is_active")
    date = serializers.SerializerMethodField()

    def get_date(self, obj):
        return utils.localize_datetime(obj.datetime, obj.timezone)
        # return obj.datetime

    def get_leadEmails(self, obj):
        return obj.leads_email.split(',')
    class Meta:
        exclude = ('periodic_task', )
        model = models.Task
        extra_kwargs = {
            "leads_email": {"write_only": True},
            "is_active": {"write_only": True},
            "datetime": {"write_only": True},
        }

class BotSerializer(serializers.ModelSerializer):
    workspace = WorkspaceModelSerializer(read_only = True)
    isActive = serializers.BooleanField(source = 'is_active', read_only = True)

    class Meta:
        exclude = ['updated_at', ]
        model = models.Bot
        extra_kwargs = {
            "is_active": {"write_only": True},
        }

class DataSerializer(serializers.ModelSerializer):
    nodeId = serializers.CharField(source = 'node_id', read_only = True)
    componentName = serializers.CharField(source = 'component_name', read_only = True)

    class Meta:
        model = models.Data
        exclude = ['id', ]
        extra_kwargs = {
            'node_id': {"write_only": True},
            'component_name': {"write_only": True},
            'saved_version': {"write_only": True}
        }

class WebhookSerializer(serializers.Serializer):
    trigger_label = serializers.CharField()
    data = serializers.JSONField()