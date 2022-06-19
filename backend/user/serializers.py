from random import randint

import bcrypt
from backend import mysqlutils
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import connections
from django.utils import timezone
from rest_framework import serializers

from . models import Profile

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

## TODO check user profile is created
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    timezone = serializers.CharField()

    def authenticate(self, password, hash):
        return bcrypt.checkpw(password.encode('utf-8'), hash.encode('utf-8'))

    def create_profile(self, user, zphere_user_id, avatar, attrs):
        pic_url = None
        if(avatar is not None):
            pic_url = f'https://zphere.io/storage/uploads/avatar/{avatar}'
        profile = Profile.objects.create(user = user, pic_url = pic_url, zphere_user_id = zphere_user_id, timezone = attrs.get('timezone', 'UTC'))
        return profile

    def validate(self, attrs):
        # current_tz = timezone.get_current_timezone()
        email = attrs.get('email')
        data = None
        with connections[settings.ZPHERE_DB_NAME].cursor() as cursor:
            cursor.execute(f'SELECT * FROM users WHERE email = "{email}"')
            data = mysqlutils.dictfetchall(cursor)

        try:
            data = data[0]
            names = data['name'].split(' ')
            first_name = names[0]
            last_name = ''
            if len(names) > 2:
                last_name = names[1]

            random_no = randint(999999999, 9999999999)
            user_details = {
                'email': data['email'],
                'password': attrs['password'],
                'username': f'{random_no}',
                'first_name': first_name,
                'last_name': last_name,
                'date_joined': (data['created_at']),
                'last_login': timezone.now(),
            }
            is_user_authenticated = self.authenticate(attrs.get('password'), data.get('password'))
            if is_user_authenticated:
                try:
                    user = User.objects.get(email = user_details.get('email'))
                    user.last_login = timezone.now()
                    user.set_password(attrs['password']) # imp rest the password
                    user.save()
                    user.profile # should call profile to check user has profile if not exception will be raised
                    return user
                except User.DoesNotExist:
                    user = User.objects.create_user(**user_details)
                    self.create_profile(user, data['id'], data['avatar'], attrs)
                    return user
                except Profile.DoesNotExist:
                    self.create_profile(user, data['id'], data['avatar'])
                    return user
        except IndexError:
            pass
        raise serializers.ValidationError("Incorrect Credentials")
