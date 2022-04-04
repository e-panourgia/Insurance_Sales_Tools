from django.shortcuts import render
from django.http import HttpResponse
from playground.models import Market

# Create your views here.
# request -> response 
# request handler 
# action 

def calculate_markets(request):
    markets = list(Market.objects.all())
    context = {'markets' : markets}
    return render(request, 'markets.jsp', context)
