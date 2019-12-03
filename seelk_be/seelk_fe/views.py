from django.shortcuts import render

def index(request):
    return render(request, 'seelk_fe/index.html')
