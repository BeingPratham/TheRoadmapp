from django.db import models

# Create your models here.
class Doubt(models.Model):
    email = models.EmailField(max_length=160)
    content = models.TextField()

    def __str__(self):
        return self.email