from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<palette_id>[0-9]+)/$', views.detail, name='palette'),
    url(r'^create/$', views.createPalette, name='create'),
]

