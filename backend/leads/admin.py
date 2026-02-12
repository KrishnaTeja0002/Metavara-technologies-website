from django.contrib import admin
from .models import Lead

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'reason', 'created_at')
    search_fields = ('name', 'email', 'message', 'reason')
    list_filter = ('reason', 'created_at')
    readonly_fields = ('created_at',)
