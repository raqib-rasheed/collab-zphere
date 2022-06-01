from django.dispatch import receiver
from django.db.models.signals import post_save
from django_celery_beat.models import ClockedSchedule, PeriodicTask
from . models import Task

@receiver(post_save, sender = Task)
def create_celery_periodic_task(self, instance, created, **kwargs):
    if created:
        clocked_schedule, _ = ClockedSchedule.objects.get_or_create(
            clocked_time = instance.datetime
        )
        periodic_Task = PeriodicTask.objects.create(
            name = f"periodic task {instance.workspace.user.email} - {instance.id}",
            task = 'main.tasks.test_func',
            clocked = clocked_schedule,
            one_off = True,
        )

