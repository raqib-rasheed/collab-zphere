from backend import mysqlutils
from django.db import connections
from django.conf import settings

def get_lead_data(lead_email):
    data = None
    with connections[settings.ZPHERE_DB_NAME].cursor() as cursor:
        cursor.execute(f'SELECT email, name, phone FROM leads WHERE email = "{lead_email}"')
        data = mysqlutils.dictfetchall(cursor)
    return data