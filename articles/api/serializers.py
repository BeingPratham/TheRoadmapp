from rest_framework import serializers

from articles.models import Doubt


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doubt
        fields = ('id', 'email', 'content')
