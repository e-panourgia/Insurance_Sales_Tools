# Generated by Django 4.0 on 2022-01-07 17:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='market',
            old_name='marketname',
            new_name='marketName',
        ),
    ]
