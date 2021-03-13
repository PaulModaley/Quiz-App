from django.shortcuts import render, redirect
from .models import Category, Question
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages
from django.core.paginator import Paginator
from django.urls import reverse_lazy
import json
# Create your views here.


def index_page(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'index.html', context)


def take_quiz(request, pk):
    questions = Question.objects.filter(choice=pk).order_by('-created_at')
    paginator = Paginator(questions,1)
    page_number = request.GET.get('page')
    page_obj = Paginator.get_page(paginator, page_number)
    context = {'questions': questions, 'page_obj': page_obj,}

    if request.method == 'GET':
        request.session['previous_page'] = request.path_info + "?page=" + request.GET.get("page", '1')
        return render(request, 'quiz.html', context)
    
    if request.method == 'POST':
        answers = []
        for i in questions:
            answers.append(i.answer)
        print(answers)
        user_answer = request.POST['option']
        print('user answer: ', user_answer)
        if user_answer in answers:
            messages.success(request, 'Correct answer')
            return HttpResponseRedirect(request.session['previous_page'])
        else:
            messages.warning(request, 'Wrong answer')
            return HttpResponseRedirect(request.session['previous_page'])
        # return render(request, 'quiz.html', context)

def result_page(request):
    return render(request, 'result.html')

