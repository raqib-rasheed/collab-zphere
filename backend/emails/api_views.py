from rest_framework.viewsets import ModelViewSet
from . import serializers

class EmailTemplateViewSet(ModelViewSet):
    serializer_class = serializers.EmailTemplateSerializer

    def perform_create(self, serializer):
        email_template = serializer.save(save = False)
        # email_t