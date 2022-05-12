from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import api_views

router = DefaultRouter()
router.register('workspace', api_views.WorkspaceViewSet, 'workspace')


urlpatterns = [
    path("", include((router.urls, "router"), namespace="router")),
    path('auth/', include('rest_framework_social_oauth2.urls')),
    path('webhook/', api_views.WebhookView.as_view(), name = 'webhook'),
]