
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework_api_key.models import APIKey
from django.contrib.auth import login, get_user_model
from . import auth
from . import serializers

"""
- Test
- Test user creation and profile creation
"""

User = get_user_model()

class LoginView(GenericAPIView):
    authentication_classes = [auth.CsrfExemptSessionAuthentication, ]
    serializer_class = serializers.LoginSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        token, is_new = Token.objects.get_or_create(user=user)
        if not is_new:
            # refresh the old token
            token.save()
            token.refresh_from_db()
        res = Response({'token': 'Token ' + token.key})
        res.set_cookie("AUTHORIZATION", token)
        return res

class ProfileView(RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    queryset = get_user_model().objects.all()
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get_object(self):
        return self.request.user

class GenerateAPIKeyView(GenericAPIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request, *args, **kwargs):
        if self.request.user.profile.api_key:
            self.request.user.profile.api_key.delete()
        api_key, key = APIKey.objects.create_key(name = f'{self.request.user.username}-key')
        self.request.user.profile.api_key = api_key
        self.request.user.profile.save()
        return Response({
            'key': key,
        }, status = status.HTTP_200_OK)
