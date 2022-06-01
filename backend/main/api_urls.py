from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import api_views

router = DefaultRouter()
router.register('workspace', api_views.WorkspaceViewSet, 'workspace')
router.register('tasks', api_views.TaskViewSet, 'task')


urlpatterns = [
    path("", include((router.urls, "router"), namespace="router")),
    path('webhook/', api_views.WebhookView.as_view(), name = 'webhook'), # not tested
    path('leads/', api_views.LeadListView.as_view(), name = 'task'), # not tested
]