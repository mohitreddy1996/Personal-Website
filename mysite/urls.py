"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home_screen),
    url(r'^home/$', views.home_screen),
    url(r'^projects/$', views.projects_view),
    url(r'^blog/google-intern', views.google_blog_view),
    url(r'^blog/microsoft-intern', views.microsoft_blog_view),
    url(r'^blog/bigclozet-intern', views.bigclozet_blog_view),
    url(r'^blog/iitbombay-intern', views.iitbombay_blog_view),
    url(r'^blog/', views.blog_view),
    url(r'^experience/$', views.experience_view),
    url(r'^academics/$', views.academics_view),
    url(r'^.*$', views.error_message),

]
