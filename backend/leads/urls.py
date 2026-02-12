from django.urls import path
from .views import LeadCreateView

urlpatterns = [
    path('contact/', LeadCreateView.as_view(), name='contact-lead-create'),
]
