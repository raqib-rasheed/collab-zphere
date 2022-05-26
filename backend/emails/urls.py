from django.urls import path, include
from . import api_urls

app_name = 'main'

urlpatterns = [
    path("api/email/", include((api_urls, "api_views"), namespace="api")),
]