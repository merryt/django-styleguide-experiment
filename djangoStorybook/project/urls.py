from django.contrib import admin
from django.urls import include, path 

urlpatterns = [
    path('tools/', include('tools.urls')),
    path('admin/', admin.site.urls),
    path('', include(django_storybook_urls)),
]

