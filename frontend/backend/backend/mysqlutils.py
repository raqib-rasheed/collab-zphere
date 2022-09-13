def dictfetchall(cursor):
    colums = [col[0] for col in cursor.description]
    return [
        dict(zip(colums, row)) for row in cursor.fetchall()
    ]