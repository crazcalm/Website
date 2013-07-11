from django.template import Context
from django.template.loader import get_template
from django.http import HttpResponse

"""
I am not sure why, but the t.render function requires that I give
it at least one arguement, so i give it a useless argument. 

Other than that, this an ordinary views.py file with web pages.
"""


def welcome_page(response):
    
    website_title = "Crazcalm"
    t = get_template("base.html")
    html = t.render(Context({"title": website_title}))
    return HttpResponse(html)

def about_page(response):
    
    website_title = "About | Crazcalm"
    t = get_template("about_page.html")
    html = t.render(Context({"title": website_title}))
    return HttpResponse(html)

def blog_page(response):
    
    website_title = "Blog | Crazcalm"
    t = get_template("blog_page.html")
    html = t.render(Context({"title": website_title}))
    return HttpResponse(html)

def contacts_page(response):
    
    website_title = "Contacts | Crazcalm"
    t = get_template("contacts_page.html")
    html = t.render(Context({"title": website_title}))
    return HttpResponse(html)

def portfolio_page(response):
    
    website_title = "Portfolio | Crazcalm"
    t = get_template("portfolio_page.html")
    html = t.render(Context({"title": website_title}))
    return HttpResponse(html)
