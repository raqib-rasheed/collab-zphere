from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField('email address', unique = True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'
