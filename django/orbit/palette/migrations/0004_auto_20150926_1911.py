# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('palette', '0003_auto_20150926_1653'),
    ]

    operations = [
        migrations.AddField(
            model_name='palette',
            name='dateUpload',
            field=models.DateTimeField(auto_now_add=True, default='1970-01-01 00:00:00'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='palette',
            name='dateVisited',
            field=models.DateTimeField(default='1970-01-01 00:00:00'),
            preserve_default=False,
        ),
    ]
