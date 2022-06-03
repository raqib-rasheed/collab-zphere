import pytz
from datetime import datetime
from rest_framework.exceptions import ValidationError

def localize_and_convert_to_utc(datetime: datetime, timezone) -> datetime:
    # we need to set tzinfo to none, else the result is not accurate
    if not timezone in pytz.all_timezones:
        raise ValidationError({"timezone": "Invalid timezone!"})
    datetime_without_tzinfo = datetime.replace(tzinfo = None)
    tz = pytz.timezone(timezone)
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