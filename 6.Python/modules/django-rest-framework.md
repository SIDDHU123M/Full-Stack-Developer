# Django REST Framework

Django REST Framework (DRF) is a powerful and flexible toolkit for building Web APIs in Django. It provides a set of tools and libraries that make it easy to create robust and scalable RESTful APIs.

## Key Features

- **Serialization**: Convert complex data types, such as querysets and model instances, into native Python datatypes that can then be easily rendered into JSON, XML, or other content types.
- **Authentication and Permissions**: Built-in support for various authentication methods and fine-grained control over permissions.
- **Viewsets and Routers**: Simplify the creation of views and URL routing.
- **Browsable API**: A web-browsable interface for interacting with the API, which is great for development and debugging.

## Installation

To install Django REST Framework, use pip:

```bash
pip install djangorestframework
```

Add `'rest_framework'` to your `INSTALLED_APPS` in the Django settings:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

## Basic Usage

### Serializers

Define serializers to convert data between JSON and Django models:

```python
from rest_framework import serializers
from .models import MyModel

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'
```

### Views

Create API views using DRF's view classes:

```python
from rest_framework import viewsets
from .models import MyModel
from .serializers import MyModelSerializer

class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
```

### URLs

Use routers to automatically generate URL patterns for your API views:

```python
from rest_framework.routers import DefaultRouter
from .views import MyModelViewSet

router = DefaultRouter()
router.register(r'mymodels', MyModelViewSet)

urlpatterns = [
    ...
    path('api/', include(router.urls)),
]
```

## Documentation

For more detailed information, refer to the [official Django REST Framework documentation](https://www.django-rest-framework.org/).
