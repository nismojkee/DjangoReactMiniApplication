from django.db import models

class Course(models.Model):
	title = models.CharField(max_length=200, unique=True)
	description = models.TextField()
	price = models.IntegerField(default=0)
	created_at = models.DateTimeField(auto_now_add=True)