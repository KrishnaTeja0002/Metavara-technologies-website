from rest_framework import serializers
from .models import Position, Application


class PositionSerializer(serializers.ModelSerializer):
    """Serializer for job positions"""
    job_type_display = serializers.CharField(source='get_job_type_display', read_only=True)
    
    class Meta:
        model = Position
        fields = ['id', 'title', 'location', 'job_type', 'job_type_display', 
                  'description', 'requirements', 'is_active', 'created_at']
        read_only_fields = ['id', 'created_at']


class ApplicationSerializer(serializers.ModelSerializer):
    """Serializer for creating job applications"""
    
    class Meta:
        model = Application
        fields = ['id', 'name', 'email', 'phone', 'position', 'resume', 'submitted_at']
        read_only_fields = ['id', 'submitted_at']
    
    def validate_email(self, value):
        """Custom email validation"""
        if not value or '@' not in value:
            raise serializers.ValidationError("Please provide a valid email address")
        return value
    
    def validate_phone(self, value):
        """Custom phone validation"""
        if not value or len(value) < 10:
            raise serializers.ValidationError("Please provide a valid phone number")
        return value


class ApplicationListSerializer(serializers.ModelSerializer):
    """Serializer for listing applications (admin view)"""
    has_resume = serializers.BooleanField(read_only=True)
    resume_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Application
        fields = ['id', 'name', 'email', 'phone', 'position', 
                  'has_resume', 'resume_url', 'submitted_at']
    
    def get_resume_url(self, obj):
        """Get absolute URL for resume"""
        request = self.context.get('request')
        if obj.has_resume and request:
            return request.build_absolute_uri(obj.resume.url)
        return None
