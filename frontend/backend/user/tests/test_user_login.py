from rest_framework import test
from django.urls import reverse
from django.db import connections
from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

class TestUserLogin(test.APITestCase):
    databases = '__all__'

    def setUp(self) -> None:
        super().setUp()
        with connections[settings.ZPHERE_DB_NAME].cursor() as cursor:
            cursor.execute(
                "CREATE TABLE `users` ("+
                "`id` bigint(20) UNSIGNED NOT NULL," +
                "`name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL," +
                "`email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL," +
                "`email_verified_at` timestamp NULL DEFAULT NULL," +
                "`password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,"  +
                "`plan` int(11) DEFAULT NULL,"  +
                "`plan_expire_date` date DEFAULT NULL,"  +
                "`requested_plan` int(11) NOT NULL DEFAULT 0,"  +
                "`type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,"  +
                "`avatar` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,"  +
                "`lang` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,"  +
                "`mode` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'light',"  +
                "`created_by` int(11) NOT NULL DEFAULT 0,"  +
                "`default_pipeline` int(11) DEFAULT NULL,"  +
                "`delete_status` int(11) NOT NULL DEFAULT 1,"  +
                "`is_active` int(11) NOT NULL DEFAULT 1,"  +
                "`remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,"  +
                "`last_login_at` datetime DEFAULT NULL,"  +
                "`created_at` timestamp NULL DEFAULT NULL,"  +
                "`updated_at` timestamp NULL DEFAULT NULL,"  +
                "`messenger_color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#2180f3',"  +
                "`dark_mode` tinyint(1) NOT NULL DEFAULT 0,"  +
                "`active_status` tinyint(1) NOT NULL DEFAULT 0"  +
                ") ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;"
            )
            cursor.execute(
                "INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `plan`, `plan_expire_date`, `requested_plan`, `type`, `avatar`, `lang`, `mode`, `created_by`, `default_pipeline`, `delete_status`, `is_active`, `remember_token`, `last_login_at`, `created_at`, `updated_at`, `messenger_color`, `dark_mode`, `active_status`) VALUES" +
                "(5, 'Gear up', 'info@gear-up.ae', NULL, '$2y$10$oWgKozmmCc5vH9EexepQvu/.JG0eIaGhQhd/OHkuWCM3nnwSiTEu.', 1, NULL, 0, 'company', NULL, 'en', 'light', 1, 1, 1, 1, 'oQA1JJkwZoBg5z59u1nrrj1bAeHgdmHQuLAbAdmVtHuPqSudqzMCUhO67Ppj', '2022-05-16 23:11:13', '2022-03-15 17:46:57', '2022-05-17 03:11:13', '#2180f3', 0, 0);"
            )
        # class Users(models.Model):
        #     username = models.CharField(
        #         _('username'),
        #         max_length=150,
        #         unique=True,
        #         help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        #         # validators=[username_validator],
        #         error_messages={
        #             'unique': _("A user with that username already exists."),
        #         },
        #     )
        #     first_name = models.CharField(_('first name'), max_length=150, blank=True)
        #     last_name = models.CharField(_('last name'), max_length=150, blank=True)
        #     email = models.EmailField(_('email address'), blank=True)
        #     password = models.CharField(_('password'), max_length=128)
        #     last_login = models.DateTimeField(_('last login'), blank=True, null=True)
        # with connections[settings.ZPHERE_DB_NAME].schema_editor() as se:
        #     se.create_model(Users)
        #     print(connections[settings.ZPHERE_DB_NAME].introspection.table_names())
        # https://stackoverflow.com/questions/7020966/how-to-create-table-during-django-tests-with-managed-false



    def test_user_login(self):
        email = 'info@gear-up.ae'
        password = 'gearup@1*99'
        url = reverse('user:api:user-login')
        response = self.client.post(url, data = {
            'email': email,
            'password': password,
        })
        print(response.data)
        