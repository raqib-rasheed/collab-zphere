from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import api_views

router = DefaultRouter()
router.register('emails', api_views.EmailTemplateViewSet, 'EmailTemplate')

urlpatterns = [
    path('', include((router.urls, "router"), namespace = "router")),
]