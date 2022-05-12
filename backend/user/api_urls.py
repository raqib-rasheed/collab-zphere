from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import api_urls

urlpatterns = [
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name = 'token'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name = 'token-refresh'),
]