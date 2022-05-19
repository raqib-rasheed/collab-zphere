from datetime import datetime
import bcrypt
from django.conf import settings
from django.db import connections
from django.contrib.auth import get_user_model
from rest_framework import serializers
from backend import mysqlutils
from random import randint


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    User = get_user_model()

    def authenticate(self, password, hash):
        return bcrypt.checkpw(password.encode('utf-8'), hash.encode('utf-8'))

    def validate(self, attrs):
        email = attrs.get('email')
        data = None
        with connections[settings.ZPHERE_DB_NAME].cursor() as cursor:
            cursor.execute(f'SELECT * FROM users WHERE email = "{email}"')
            data = mysqlutils.dictfetchall(cursor)[0]

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
            'date_joined': data['created_at'],
            'last_login': datetime.now(),
        }
        is_user_authenticated = self.authenticate(attrs.get('password'), data.get('password'))
        if is_user_authenticated:
            try:
                user = self.User.objects.get(email = user_details.get('email'))
                user.last_login = datetime.now()
                user.save()
                return user
            except self.User.DoesNotExist:
                return self.User.objects.create_user(**user_details)
        raise serializers.ValidationError("Incorrect Credentials")

