from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import api_views

urlpatterns = [
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name = 'token'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name = 'token-refresh'),
    path('login/', api_views.LoginView.as_view(), name = 'user-login'),
]