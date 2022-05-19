
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, get_user_model
from . import auth
from . import serializers
from . import authenticators

class LoginView(GenericAPIView):
    authentication_classes = [auth.CsrfExemptSessionAuthentication, ]
    serializer_class = serializers.LoginSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        token = Token.objects.create(user=user)
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
