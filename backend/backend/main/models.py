from django.db import models


class AbstractReactFlowElement(models.Model):
    saved_version = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        abstract = True

class Node(AbstractReactFlowElement):
    node_id = models.CharField(max_length=100)
    data = models.JSONField(null=True, blank=True)
    caption = models.CharField("Caption", max_length=40, null=True) # just given not using
    position_x = models.FloatField(editable=False, default=0)
    position_y = models.FloatField(editable=False, default=0)   

class Edge(AbstractReactFlowElement):
    edge_id = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    target = models.CharField(max_length=100)
    sourceHandle = models.CharField(max_length=100, blank = True, null = True)
    targetHandle = models.CharField(max_length=100, blank = True, null = True)
    animated = models.BooleanField(default=True)
    label = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=40)