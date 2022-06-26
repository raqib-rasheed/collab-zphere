from rest_framework import serializers
from . import models

class EmailTemplateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.EmailTemplate
        fields = (
            'name',
            'body',
            'description',
            'is_global',
            'pricing',
            'price',
            # 'tags',
            'category'
        )
        # extra_kwargs = {
        #     'tags': {"required": False, "allow_null": True},
        # }