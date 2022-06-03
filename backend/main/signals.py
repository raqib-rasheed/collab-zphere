from datetime import tzinfo
import pytz
from django.dispatch import receiver
from django.db.models.signals import post_save
from django_celery_beat.models import ClockedSchedule, PeriodicTask
from . models import Task

@receiver(post_save, sender = Task)
def create_celery_periodic_task(sender, instance, created, **kwargs):
    """
    Just create a new clockschedule assign it to periodic task
    If there is any change to datetime, then activate the periodic task and reassign the clocked in periodic task
    """
    if created:
        timezone = pytz.timezone(instance.timezone)
        datetime = instance.datetime.replace(tzinfo = timezone)
        clocked_schedule, _ = ClockedSchedule.objects.get_or_create(
            clocked_time = datetime
        )
        periodic_task = PeriodicTask.objects.create(
            name = f"task {instance.workspace.user.email} - {instance.id}",
            task = 'main.tasks.test_func',
            clocked = clocked_schedule,
            enabled = True,
            one_off = True,
        )
        instance.periodic_task = periodic_task
        instance.save()
    else:
        if instance.periodic_task.clocked.clocked_time != instance.datetime:
            clocked_schedule, _ = ClockedSchedule.objects.get_or_create(
                clocked_time = instance.datetime
            )
            instance.periodic_task.clocked = clocked_schedule
            instance.periodic_task.enabled = True
            instance.periodic_task.save()
        elif instance.is_active != instance.periodic_task.enabled:
            instance.periodic_task.enabled = instance.is_active
            instance.periodic_task.save()



