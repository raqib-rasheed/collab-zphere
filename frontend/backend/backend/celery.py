import os

from celery import Celery
from django.http import HttpResponse

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

app = Celery('backend')
app.conf.enable_utc = False # by default time zone is UTC we've changed this in our settings. 
app.conf.update(timezone = "Asia/Kolkata")
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django apps.
app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}') 
