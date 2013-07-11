from django.conf.urls import patterns, url
import views

"""
I had a lot of trouble with this file. There are a lot of different examples
of how to correct set up the urls online, but I think most of them are for an 
older version of Django and are no longer correct for the newer versions...
"""

urlpatterns = patterns('',
    
    url(r'^crazcalm$', views.welcome_page),
    url(r'^crazcalm/about$', views.about_page),
    url(r'^crazcalm/blog$', views.blog_page),
    url(r'^crazcalm/contacts$', views.contacts_page),
    url(r'^crazcalm/portfolio$', views.portfolio_page),
)
