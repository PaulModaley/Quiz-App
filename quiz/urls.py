from django.urls import path
from .views import *

urlpatterns = [
    path('', index_page, name='index_page'),
    path('<int:pk>/', take_quiz, name='take_quiz'),
    path('result/', result_page, name='result_page'),
]