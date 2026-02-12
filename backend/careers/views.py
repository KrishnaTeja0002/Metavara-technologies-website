from django.http import JsonResponse, FileResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ValidationError
from django.contrib.admin.views.decorators import staff_member_required
from .models import Application, Position
import json


@require_http_methods(["GET"])
def list_positions(request):
    """
    API endpoint to list all active job positions
    GET /api/positions/
    """
    try:
        positions = Position.objects.filter(is_active=True)
        
        data = [{
            'id': pos.id,
            'title': pos.title,
            'location': pos.location,
            'job_type': pos.job_type,
            'job_type_display': pos.get_job_type_display(),
            'description': pos.description,
            'requirements': pos.requirements,
            'created_at': pos.created_at.strftime('%Y-%m-%d')
        } for pos in positions]
        
        return JsonResponse({
            'success': True,
            'positions': data,
            'count': len(data)
        })
        
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def submit_application(request):
    """
    API endpoint to submit a job application
    POST /api/applications/
    """
    try:
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        position = request.POST.get('position', '').strip()
        resume = request.FILES.get('resume')
        
        if not all([name, email, phone, position]):
            return JsonResponse({
                'success': False,
                'error': 'All fields except resume are required'
            }, status=400)
        
        application = Application(
            name=name,
            email=email,
            phone=phone,
            position=position,
            resume=resume
        )
        
        try:
            application.full_clean()
            application.save()
        except ValidationError as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=400)
        
        return JsonResponse({
            'success': True,
            'message': 'Application submitted successfully',
            'application_id': application.id
        }, status=201)
        
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }, status=500)


@staff_member_required
@require_http_methods(["GET"])
def list_applications(request):
    """
    API endpoint to list all applications (admin only)
    GET /api/applications/list/
    """
    try:
        applications = Application.objects.all()
        
        data = [{
            'id': app.id,
            'name': app.name,
            'email': app.email,
            'phone': app.phone,
            'position': app.position,
            'has_resume': app.has_resume,
            'resume_url': request.build_absolute_uri(app.resume.url) if app.has_resume else None,
            'submitted_at': app.submitted_at.strftime('%Y-%m-%d %H:%M:%S')
        } for app in applications]
        
        return JsonResponse({
            'success': True,
            'applications': data,
            'count': len(data)
        })
        
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }, status=500)


@require_http_methods(["GET"])
def download_resume(request, application_id):
    """
    API endpoint to download a resume
    GET /api/applications/<id>/resume/
    """
    try:
        application = Application.objects.get(id=application_id)
        
        if not application.has_resume:
            raise Http404("Resume not found")
        
        response = FileResponse(application.resume.open('rb'))
        response['Content-Disposition'] = f'attachment; filename="{application.name}_resume.{application.resume.name.split(".")[-1]}"'
        
        return response
        
    except Application.DoesNotExist:
        raise Http404("Application not found")
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }, status=500)
