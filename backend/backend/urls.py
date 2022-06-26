from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name = 'index.html'), name = 'index'),
    path("", include("main.urls", namespace="main")),
    path("", include("user.urls", namespace="user")),
    path("", include("emails.urls", namespace="emails")),
]
