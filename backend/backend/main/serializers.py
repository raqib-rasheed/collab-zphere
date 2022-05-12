from rest_framework import serializers
from . import models


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
