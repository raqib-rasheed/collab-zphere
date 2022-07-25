from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Profile(models.Model):
    zphere_user_id = models.IntegerField(unique = True) # id of user in zphere 
    user = models.OneToOneField('User', on_delete = models.CASCADE)
    pic_url = models.URLField(blank = True, null = True)
    pic = models.ImageField(blank = True, null = True)
    created_by = models.IntegerField(blank = True, null = True) # used for storing created user, used in leads
    timezone = models.CharField(max_length=32, choices=settings.TIMEZONES, default= 'UTC')
    api_key = models.ForeignKey('rest_framework_api_key.APIKey', null = True, blank = True, on_delete = models.SET_NULL)

class User(AbstractUser):
    email = models.EmailField('email address', unique = True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'
