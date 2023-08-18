from django.contrib import admin
from django.urls import path, include

from . import views
from .api import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
    path('login/', views.login_view),
    path('accounts/', include('django.contrib.auth.urls')),
]
