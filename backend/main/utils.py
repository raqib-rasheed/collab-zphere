import pytz
from bs4 import BeautifulSoup
from datetime import datetime
from rest_framework.exceptions import ValidationError

no_of_template_variables = 3

template_variables = {
    "name": {
        "data_index": 0,
        "data_decoration_char": "#",
        "data_id": 1,
        "data_value": "Name",
        "jinja": "{{name}}"
    },
    "email": {
        "data_index": 1,
        "data_decoration_char": "#",
        "data_id": 2,
        "data_value": "Email",
        "jinja": "{{email}}"
    },
    "phone": {
        "data_index": 2,
        "data_decoration_char": "#",
        "data_id": 3,
        "data_value": "Phone",
        "jinja": "{{phone}}"
    },
} # when you add new template varible update 'no_of_template_variable' also

def replace_html_with_template_variable(soup, template_variable):
    for tag in soup.select(f'span[data-value="{template_variable["data_value"]}"]'):
        tag.replaceWith(template_variable['jinja'])
    return soup

def convert_template_variable_to_jinja(html):
    soup = BeautifulSoup(html, 'html.parser')
    for key in template_variables: # we want to convert all the template_variables
        replace_html_with_template_variable(soup, template_variables[key])
    return soup

def localize_datetime(datetime: datetime, timezone) -> datetime:
    if not timezone in pytz.all_timezones:
        raise ValidationError({"timezone": "Invalid timezone!"})
    datetime.replace(tzinfo = None)
    tz = pytz.timezone(timezone)
    return datetime.astimezone(tz)

def localize_and_convert_to_utc(datetime: datetime, timezone) -> datetime:
    if not timezone in pytz.all_timezones:
        raise ValidationError({"timezone": "Invalid timezone!"})
    # we need to set tzinfo to none, else the result is not accurate
    datetime_without_tzinfo = datetime.replace(tzinfo = None)
    tz = pytz.timezone(timezone)
    # this will localize to timezone, and to convert it to utc call astimezone function
    return tz.localize(datetime_without_tzinfo).astimezone(pytz.utc)

def validate_date(datetime:datetime):
    """
    return ture if datetime is future
    return false if datetime is past
    """
    now = datetime.utcnow().astimezone(pytz.utc)
    if datetime > now:
        return True
    return False

def convert_and_validate(datetime: datetime, timezone):
    datetime = localize_and_convert_to_utc(datetime, timezone)
    is_valid = validate_date(datetime)
    return datetime, is_valid