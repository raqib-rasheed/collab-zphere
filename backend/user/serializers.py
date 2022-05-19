from random import randint

import bcrypt
from backend import mysqlutils
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import connections
from django.utils import timezone
from rest_framework import serializers

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def authenticate(self, password, hash):
        return bcrypt.checkpw(password.encode('utf-8'), hash.encode('utf-8'))

    def validate(self, attrs):
        current_tz = timezone.get_current_timezone()
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
                'date_joined': current_tz.localize(data['created_at']),
                'last_login': timezone.now(),
            }
            is_user_authenticated = self.authenticate(attrs.get('password'), data.get('password'))
            if is_user_authenticated:
                try:
                    user = User.objects.get(email = user_details.get('email'))
                    user.last_login = timezone.now()
                    user.set_password(attrs['password']) # imp rest the password
                    user.save()
                    return user
                except User.DoesNotExist:
                    return User.objects.create_user(**user_details)
        except IndexError:
            pass
        raise serializers.ValidationError("Incorrect Credentials")

