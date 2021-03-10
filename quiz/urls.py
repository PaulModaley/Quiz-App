from django.urls import path
from .views import *

urlpatterns = [
    path('', index_page, name='index_page'),
    path('<int:pk>/', take_quiz, name='take_quiz'),
]