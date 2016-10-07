from django.shortcuts import render
from django.template.context_processors import csrf
from models import Message
import os


def home_screen(request):
    context = {}
    if 'submit' in request.POST:
        msge = Message(name=request.POST['name'], email=request.POST['email'], message=request.POST['message'])
        msge.save()
        context.update({'message': 'Successfully Saved', 'messagetype': 'success'})
    context.update(csrf(request))
    return render(request, 'index.html', context)


def error_message(request):
    return render(request, 'error_message.html', {})


def projects_view(request):
    return render(request, 'projects.html', {})


def experience_view(request):
    return render(request, 'experience.html', {})


def academics_view(request):
    return render(request, 'academics.html', {})

