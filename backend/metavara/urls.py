from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/applications/', include('careers.urls')),
    path('api/leads/', include('leads.urls')),
    path('', lambda request: HttpResponse("Welcome to Metavara Technologies Backend API"), name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

