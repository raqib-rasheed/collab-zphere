from rest_framework import serializers
from . import models

class EmailTemplateSerializer(serializers.ModelSerializer):
    isGlobal = serializers.BooleanField(source = 'is_global', read_only = True)
    updatedAt = serializers.DateTimeField(source = 'updated_at', read_only = True)
    class Meta:
        model = models.EmailTemplate
        fields = (
            'id',
            'name',
            'body',
            'description',
            'is_global',
            'pricing',
            'price',
            # 'tags',
            'category',
            'isGlobal',
            'updatedAt',
            # 'updated_at',
        )
        # extra_kwargs = {
        #     'updated_at': {"read_only": True},
        # }