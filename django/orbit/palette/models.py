from django.db import models

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



