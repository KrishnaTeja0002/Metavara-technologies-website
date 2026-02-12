from django.contrib import admin
from .models import Application, Position


@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    """Admin interface for job positions"""
    
    list_display = ('title', 'location', 'job_type', 'is_active', 'created_at')
    list_filter = ('job_type', 'is_active', 'location')
    search_fields = ('title', 'location', 'description')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Position Details', {
            'fields': ('title', 'location', 'job_type', 'is_active')
        }),
        ('Description', {
            'fields': ('description', 'requirements')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    """Admin interface for job applications"""
    
    list_display = ('name', 'email', 'phone', 'position', 'has_resume', 'submitted_at')
    list_filter = ('position', 'submitted_at')
    search_fields = ('name', 'email', 'phone', 'position')
    readonly_fields = ('submitted_at',)
    date_hierarchy = 'submitted_at'
    
    fieldsets = (
        ('Applicant Information', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Application Details', {
            'fields': ('position', 'resume', 'submitted_at')
        }),
    )
    
    def has_resume(self, obj):
        """Display whether resume is uploaded"""
        return obj.has_resume
    has_resume.boolean = True
    has_resume.short_description = 'Resume Uploaded'
