from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Color(models.Model):
    r = models.PositiveSmallIntegerField()
    g = models.PositiveSmallIntegerField()
    b = models.PositiveSmallIntegerField()
    a = models.PositiveSmallIntegerField(default=1)
    def __str__(self):
        return 'rgba( {0}, {1}, {2}, {3} )'.format( self.r, self.g, self.b, self.a )

class Palette(models.Model):
    colors = models.ManyToManyField(Color)
    dateUpload = models.DateTimeField(auto_now_add=True)
    dateVisited = models.DateTimeField()
    user = models.ForeignKey(User)
    image = models.ForeignKey('Image')
    published = models.BooleanField(default=0)
    moderated = models.BooleanField(default=0)
    upvotes = models.PositiveIntegerField(default=0)
    downvotes = models.PositiveIntegerField(default=0)
    visits = models.PositiveIntegerField(default=0)

class Image(models.Model):
    source = models.CharField(max_length=20000)
    image = models.ImageField("images")
    uploader = models.ForeignKey(User)
    date = models.DateTimeField(auto_now_add=True)

