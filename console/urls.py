from django.conf.urls import url
from . import views

app_name = 'console'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^dashboard/$', views.index, name='index'),
    url(r'^enblist/$', views.enb_list),
    url(r'^enbdetail/(?P<pk>[0-9]+)/$', views.enb_detail)
]
