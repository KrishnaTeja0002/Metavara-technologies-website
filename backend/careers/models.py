from django.db import models
from django.core.validators import FileExtensionValidator


class Position(models.Model):
    """Model for job positions/openings"""
    
    JOB_TYPE_CHOICES = [
        ('full-time', 'Full-time'),
        ('part-time', 'Part-time'),
        ('contract', 'Contract'),
        ('internship', 'Internship'),
    ]
    
    title = models.CharField(max_length=200, help_text="Job title")
    location = models.CharField(max_length=200, help_text="Job location")
    job_type = models.CharField(
        max_length=20, 
        choices=JOB_TYPE_CHOICES, 
        default='full-time',
        help_text="Type of employment"
    )
    description = models.TextField(help_text="Job description")
    requirements = models.TextField(blank=True, help_text="Job requirements")
    is_active = models.BooleanField(default=True, help_text="Is this position currently open?")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Job Position'
        verbose_name_plural = 'Job Positions'
    
    def __str__(self):
        return f"{self.title} ({self.location})"


class Application(models.Model):
    """Model for job applications submitted through the careers form"""
    
    name = models.CharField(max_length=200, help_text="Applicant's full name")
    email = models.EmailField(help_text="Applicant's email address")
    phone = models.CharField(max_length=20, help_text="Applicant's phone number")
    position = models.CharField(max_length=200, help_text="Position applied for")
    resume = models.FileField(
        upload_to='resumes/',
        null=True,
        blank=True,
        validators=[FileExtensionValidator(allowed_extensions=['pdf', 'doc', 'docx'])],
        help_text="Resume file (PDF, DOC, or DOCX)"
    )
    submitted_at = models.DateTimeField(auto_now_add=True, help_text="Submission timestamp")
    
    class Meta:
        ordering = ['-submitted_at']
        verbose_name = 'Job Application'
        verbose_name_plural = 'Job Applications'
    
    def __str__(self):
        return f"{self.name} - {self.position}"
    
    @property
    def has_resume(self):
        """Check if resume is uploaded"""
        return bool(self.resume)
