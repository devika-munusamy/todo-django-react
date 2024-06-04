from django.urls import path
from . import views

urlpatterns = [
    path("tasks/", views.TaskListCreate.as_view(), name="task-list"),
    path("tasks/update/<int:pk>/", views.UpdateTask.as_view(), name="update-task"),
    path("tasks/delete/<int:pk>/", views.TaskDelete.as_view(), name="delete-task"),
]