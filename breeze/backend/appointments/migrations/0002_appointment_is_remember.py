# Generated by Django 3.2.8 on 2021-11-08 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='is_remember',
            field=models.BooleanField(default=0),
        ),
    ]
