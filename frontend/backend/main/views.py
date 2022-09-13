from django.http import HttpResponse
from django.shortcuts import render
from .tasks import test_func

def test(request):
    test_func.delay()
    return HttpResponse("Done")

# connection = mysql.connector.connect(host='https://premium239.web-hosting.com:2083/', database='zphejslz_zphere', user='zphejslz', password='pynative@#29')