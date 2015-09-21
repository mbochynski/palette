# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')),
                ('r', models.PositiveSmallIntegerField()),
                ('g', models.PositiveSmallIntegerField()),
                ('b', models.PositiveSmallIntegerField()),
                ('a', models.PositiveSmallIntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Palette',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')),
                ('colors', models.ManyToManyField(to='palette.Color')),
            ],
        ),
    ]
