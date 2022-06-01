from rest_framework import serializers
from . import models
from django.conf import settings
from django.db import connections
from backend import mysqlutils


class WorkspaceSerializer(serializers.Serializer):
    nodes = serializers.JSONField()
    edges = serializers.JSONField()

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
            "saved_version",
            "position_x",
            "position_y",
            "node_id",
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
            # "targetHandle",
            # "sourceHandle",
            "animated",
            "label",
            "edge_id",
            "saved_version",
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
        exclude = ('id', )
        model = models.Workspace

class TaskSerializer(serializers.ModelSerializer):
    workspace = WorkspaceModelSerializer(read_only = True)
    # timezone = serializers.CharField(write_only = True)
    leads_email_array= serializers.SerializerMethodField() # this will be returned when we call client

    def get_leads_email_array(self, obj):
        return obj.leads_email.split(',')
    class Meta:
        exclude = ('id', )
        model = models.Task
        extra_kwargs = {
            "leads_email": {"write_only": True},
        }