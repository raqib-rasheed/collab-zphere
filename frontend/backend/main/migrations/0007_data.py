# Generated by Django 4.0.5 on 2022-07-18 13:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_bot_edge_bot_node_bot'),
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('saved_version', models.PositiveIntegerField(blank=True, null=True)),
                ('node_id', models.CharField(max_length=50)),
                ('component_name', models.CharField(max_length=100)),
                ('data', models.JSONField()),
                ('bot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.bot')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
