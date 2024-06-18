#  To-do sample application

> ## Description

>> A sample application to create to-list using React and Django

> ## Features

>> 1. Create Task(from dialog form)
>> 2. Update task status from Table
>> 3. Delete Tasks

> ## Installation
>> Follow these steps to set up the project on your local machine.

> ### Prerequisites

>> 1. Node (>=18)

> ### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/devika-munusamy/todo-django-react.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-djano-react
    ```
3. Navigate to the backend(django) dir:
    ```bash
    cd backend
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
4. Navigate to the frontend(react) dir:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
