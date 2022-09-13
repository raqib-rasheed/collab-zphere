import uuid
from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

class Workspace(models.Model):
    DEFAULT_NAME = 'default'
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    name = models.CharField(max_length = 250)
    description = models.TextField()

class Bot(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key = True, unique = True)
    name = models.CharField(max_length = 300)
    workspace = models.ForeignKey('Workspace', on_delete = models.CASCADE)
    is_active = models.BooleanField(default=0)
    img = models.ImageField(upload_to = 'bots/imgs/', null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class AbstractReactFlowElement(models.Model):
    bot = models.ForeignKey('Bot', on_delete = models.CASCADE)
    saved_version = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        abstract = True

class Node(AbstractReactFlowElement):
    node_id = models.CharField(max_length=100)
    data = models.JSONField(null=True, blank=True)
    caption = models.CharField("Caption", max_length=40, null=True) # just given not using
    position_x = models.FloatField(editable=False, default=0)
    position_y = models.FloatField(editable=False, default=0)
    type = models.CharField(max_length = 100)

class Edge(AbstractReactFlowElement):
    edge_id = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    target = models.CharField(max_length=100)
    sourceHandle = models.CharField(max_length=100, blank = True, null = True)
    targetHandle = models.CharField(max_length=100, blank = True, null = True)
    animated = models.BooleanField(default=True)
    label = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=40)

class Data(AbstractReactFlowElement):
    node_id = models.CharField(max_length = 50)
    component_name = models.CharField(max_length = 100)
    data = models.JSONField()


"""
also sent delete signal to task to delete periodic task 
"""
class Task(models.Model):
    workspace = models.ForeignKey('Workspace', on_delete = models.CASCADE)
    name = models.CharField(max_length = 120)
    timezone = models.CharField(max_length = 100, choices = settings.TIMEZONES)
    datetime = models.DateTimeField()
    is_active = models.BooleanField(default = True)
    subject = models.CharField(max_length = 1000)
    message = models.TextField()
    leads_email = models.TextField() # leads list is stored as string separated by comma
    periodic_task = models.ForeignKey('django_celery_beat.periodictask', on_delete = models.SET_NULL, related_name = "tasks", null = True, blank = True)
