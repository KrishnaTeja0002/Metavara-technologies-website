from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer
from rest_framework.permissions import AllowAny

class LeadCreateView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [AllowAny]
