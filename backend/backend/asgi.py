"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from decouple import config


# os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'backend.{config("SETTINGS_FILE")}')

os.environ['DJANGO_SETTINGS_MODULE'] = f'backend.{config("SETTINGS_FILE")}'

application = get_asgi_application()
