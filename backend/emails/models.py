from django.db import models
from django.contrib.auth import get_user_model

class ModelWithUserAndDateTimes(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        abstract = True
class Category(ModelWithUserAndDateTimes):
    name = models.CharField(max_length = 120)
    is_global = models.BooleanField(default = False)

class EmailTages(ModelWithUserAndDateTimes):
    name = models.CharField(max_length = 120)
    is_global = models.BooleanField(default = False)

class EmailTemplate(ModelWithUserAndDateTimes):
    FREE = 'F'
    PAID = 'P'
    PRICING_CHOICES = (
        (FREE, 'FREE'),
        (PAID, 'PAID')
    )
    name = models.CharField(max_length = 250)
    subject = models.CharField(max_length = 1000)
    body = models.TextField()
    description = models.TextField()
    is_global = models.BooleanField(default = False)
    draft = models.BooleanField(default = False)
    pricing = models.CharField(default = FREE, max_length = 1, choices = PRICING_CHOICES)
    price = models.PositiveIntegerField(blank = True, null = True)
    tags = models.ManyToManyField('EmailTages')
    category = models.ForeignKey('Category', on_delete = models.CASCADE, blank = True, null = True)