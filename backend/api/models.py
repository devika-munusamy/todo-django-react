from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):

    TYPE_CHOICES = [
        ('once', 'Once'),
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
    ]

    title = models.CharField(max_length=100)
    content = models.TextField()
    done = models.BooleanField(default=False)
    task_type = models.CharField(
        max_length=10,
        choices=TYPE_CHOICES,
        default='daily',
    )
    created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now_add=True)
    # assignee = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")

    def __str__(self):
        return self.title