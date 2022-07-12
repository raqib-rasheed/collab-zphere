from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html"), name="index"),
    re_path(
        r"^app/(?:.*)/?$",
        TemplateView.as_view(template_name="app/index.html"),
        name="app",
    ),
    path("", include("main.urls", namespace="main")),
    path("", include("user.urls", namespace="user")),
    path("", include("emails.urls", namespace="emails")),
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
    ) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
