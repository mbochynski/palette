# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('palette', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('source', models.CharField(max_length=20000)),
                ('image', models.ImageField(upload_to='')),
                ('uploader', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='palette',
            name='downvotes',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='palette',
            name='moderated',
            field=models.BooleanField(default=0),
        ),
        migrations.AddField(
            model_name='palette',
            name='published',
            field=models.BooleanField(default=0),
        ),
        migrations.AddField(
            model_name='palette',
            name='upvotes',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='palette',
            name='user',
            field=models.ForeignKey(default='1', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='palette',
            name='visits',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='palette',
            name='image',
            field=models.ForeignKey(default='1', to='palette.Image'),
            preserve_default=False,
        ),
    ]
