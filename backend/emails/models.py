from django.db import models
from django.contrib.auth import get_user_model

class Category(models.Model):
    name = models.CharField(max_length = 120)
    is_global = models.BooleanField(default = False)

class EmailTages(models.Model):
    name = models.CharField(max_length = 120)
    is_global = models.BooleanField(default = False)

class EmailTemplate(models.Model):
    FREE = 'F'
    PAID = 'P'
    PRICING_CHOICES = (
        (FREE, 'FREE'),
        (PAID, 'PAID')
    )
    name = models.CharField(max_length = 250)
    body = models.TextField()
    description = models.TextField()
    is_global = models.BooleanField(default = False)
    draft = models.BooleanField(default = False)
    pricing = models.CharField(default = FREE, max_length = 1, choices = PRICING_CHOICES)
    price = models.PositiveIntegerField(blank = True, null = True)
    user = models.ForeignKey(get_user_model(), on_delete = models.CASCADE)
    tags = models.ManyToManyField('EmailTages')
    category = models.ForeignKey('Category', on_delete = models.CASCADE)