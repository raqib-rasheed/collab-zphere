from django.urls import path, include
from . import api_urls
from . import views

app_name = 'main'

urlpatterns = [
    path("api/", include((api_urls, "api_views"), namespace="api")),
    path('test', views.test, name = 'test'),
]