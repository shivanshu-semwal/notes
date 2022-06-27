---
title: django
---

# Directory structure

- `manage.py` - main file to run server, make apps
- `projectname` - main folder for the project
  - `url.py` - contains the mapping of the url to the project
  - `settings.py` - contains the setting of the installed apps, you can add apps here

# Basic commands

- how to start new project `django-admin startproject projectname`
- how to create new app inside the project `python manage.py startapp appname`
-

# Templating

- `{% raw %}{}{% endraw %}`
- `{% raw %}{% %}{% endraw %}`

# Models

- after creating models you should do migrations
  - `python manage.py migrate`
- finish making migrations
  - `python manage.py makemigrations app_name`
