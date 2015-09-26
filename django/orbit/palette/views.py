from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    context = {}
    return render(request, 'palette/index.html', context)

def detail(request, palette_id):
    return HttpResponse("You're looking at palette %s." % palette_id)

def createPalette(request):
    context = {}
    return render(request, 'palette/createPalette.html', context)

