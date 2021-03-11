from django.shortcuts import render, redirect
from .models import Category, Question
from django.http import HttpResponse
from django.contrib import messages
# Create your views here.


def index_page(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'index.html', context)


def take_quiz(request, pk):
    questions = Question.objects.filter(choice=pk)
    context = {'questions': questions, 'values': request.POST}
    if request.method == 'GET':
        # paginator = Paginator(questions,1)
        # page_number = request.GET.get('page')
        # page_obj = Paginator.get_page(paginator, page_number)
        return render(request, 'quiz.html', context)
    
    if request.method == 'POST':
        answers = []
        for i in questions:
            answers.append(i.answer)
        print(answers)
        user_answer = request.POST['option']
        # print(type(user_answer))
        # context = {'questions': questions, 'user_answer': user_answer}
        if user_answer in answers:
            messages.success(request, 'Correct answer')
            # return redirect('take_quiz')
        else:
            messages.error(request, 'Wrong answer')
        return render(request, 'quiz.html', context)

