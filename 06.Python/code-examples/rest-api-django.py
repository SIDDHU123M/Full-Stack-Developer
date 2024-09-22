# rest-api-django.py

from django.http import JsonResponse

# Example view for a REST API endpoint
def api_endpoint(request):
    # Process the request and generate a response
    data = {
        'message': 'Hello, World!',
        'status': 200
    }
    return JsonResponse(data)