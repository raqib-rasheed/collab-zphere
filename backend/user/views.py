from django.shortcuts import render
from django.db import connections
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, CreateAPIView
from . import auth
from . import serializers
