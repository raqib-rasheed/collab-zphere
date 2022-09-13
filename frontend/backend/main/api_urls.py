from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import api_views

router = DefaultRouter()
router.register('workspace/(?P<bot_id>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', api_views.WorkspaceViewSet, 'workspace')
router.register('tasks', api_views.TaskViewSet, 'task')
router.register('bots', api_views.BotViewSet, 'bot')


urlpatterns = [
    path("", include((router.urls, "router"), namespace="router")),
    path('webhook/', api_views.WebhookView.as_view(), name = 'webhook'), # not tested
    path('leads/', api_views.LeadListView.as_view(), name = 'task'), # not tested
    path('template-variables/', api_views.TemplateVaribles.as_view(), name = 'template-variables'), 
]