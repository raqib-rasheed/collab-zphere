
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import login
from . import auth
from . import serializers

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
        res = Response({'token': token.key})
        res.set_cookie("AUTHORIZATION", token)
        return res
