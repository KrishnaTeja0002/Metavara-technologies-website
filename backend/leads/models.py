from django.db import models

class Lead(models.Model):
    REASON_CHOICES = [
        ('service', 'Request for Service'),
        ('career', 'Join Metavara Technologies'),
        ('vendor', 'Vendor Registration'),
        ('general', 'General Inquiry'),
        ('other', 'Other Requests'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    reason = models.CharField(max_length=50, choices=REASON_CHOICES, default='general')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
