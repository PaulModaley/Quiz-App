from django.shortcuts import render, redirect
from .models import Category, Question
from django.core.paginator import Paginator

# Create your views here.


def index_page(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'index.html', context)


def take_quiz(request, pk):
    if request.method == 'GET':
        questions = Question.objects.filter(choice=pk)
        paginator = Paginator(questions,1)
        page_number = request.GET.get('page')
        page_obj = Paginator.get_page(paginator, page_number)
        context = {'questions': questions, 'page_obj': page_obj}
        return render(request, 'quiz.html', context)
    
    if request.method == 'POST':
        pass