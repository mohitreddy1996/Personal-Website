from django.shortcuts import render
from django.template.context_processors import csrf
import os


def home_screen(request):
    return render(request, 'index.html', {})


def error_message(request):
    return render(request, 'error_message.html', {})


def projects_view(request):
    return render(request, 'projects.html', {})


def experience_view(request):
    return render(request, 'experience.html', {})


def academics_view(request):
    return render(request, 'academics.html', {})

