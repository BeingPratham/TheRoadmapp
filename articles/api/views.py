from rest_framework import permissions
from rest_framework.generics import (
    
    CreateAPIView,
    
)
from articles.models import Doubt
from .serializers import ArticleSerializer

class ArticleCreateView(CreateAPIView):
    queryset = Doubt.objects.all()
    serializer_class = ArticleSerializer
    # permission_classes = (permissions.IsAuthenticated, )