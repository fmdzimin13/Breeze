# Generated by Django 3.2.8 on 2021-11-08 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0002_appointment_is_remember'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='is_remember',
        ),
    ]
