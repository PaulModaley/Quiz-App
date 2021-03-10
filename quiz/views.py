from django.shortcuts import render, redirect
from .models import Category, Question
# Create your views here.


def index_page(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'index.html', context)


def take_quiz(request, pk):
    if request.method == 'GET':
        questions = Question.objects.filter(choice=pk)
        context = {'questions': questions}
        return render(request, 'quiz.html', context)
    
    if request.method == 'POST':
        pass