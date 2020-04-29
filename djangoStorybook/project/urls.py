from django.contrib import admin
from django.urls import include, path 
from django_storybook.urls import django_storybook_urls


urlpatterns = [
    path('tools/', include('tools.urls')),
    path('admin/', admin.site.urls),
    path('', include(django_storybook_urls)),
]

