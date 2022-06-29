from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from . import serializers, models

class EmailTemplateViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]
    serializer_class = serializers.EmailTemplateSerializer

    def get_queryset(self):
        return models.EmailTemplate.objects.filter(user = self.request.user)

    def perform_create(self, serializer):
        # email_template.user = self.request.user
        email_template = serializer.save(user = self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
