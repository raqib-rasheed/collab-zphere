from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls", namespace="main")),
    path("", include("user.urls", namespace="user")),
    path("", include("emails.urls", namespace="emails")),
]
