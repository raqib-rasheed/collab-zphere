from django.template import Context, engines
from django.conf import settings
from django.core.mail import send_mail
from celery import shared_task
from .models import Task
from .mysql_quries import get_lead_data
from .utils import convert_template_variable_to_jinja


@shared_task(bind=True)
def test_func(self):
    for i in range(10):
        print(i)
    return "Done"


@shared_task(bind=True)
def send_email(self, task_id):
    task = Task.objects.get(id=task_id)
    for lead_email in task.leads_email.split(","):
        lead_data = get_lead_data(lead_email)[0]
        jinja_syntax = convert_template_variable_to_jinja(task.message)
        dt_engine = engines["django"].engine
        html_body_template = dt_engine.from_string(jinja_syntax)
        context = Context(
            {
                "name": lead_data["name"],
                "email": lead_data["email"],
                "phone": lead_data["phone"],
            }
        )
        html_body = html_body_template.render(context)
        print(html_body)
        send_mail(
            subject=task.subject,
            html_message=html_body,
            message = "", # this is required
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[
                lead_email,
            ],
        )
