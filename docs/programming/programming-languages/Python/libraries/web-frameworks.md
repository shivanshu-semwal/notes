# Web Frameworks

Frameworks automate the common implementation of common solutions which gives the flexibility to the users to focus on the application logic instead of the basic routine processes.

Frameworks make the life of web developers easier by giving them a structure for app development. They provide common patterns in a web application that are fast, reliable and easily maintainable.
Visit the following resources to learn more:

- [Pyscript: A Browser-Based Python Framework for the 99%](https://thenewstack.io/pyscript-a-browser-based-python-framework/)

## FastAPI

FastAPI is a Web framework for developing RESTful APIs in Python. FastAPI is based on Pydantic and type hints to validate, serialize, and deserialize data and automatically auto-generate OpenAPI documents.

- [Official Documentation](https://fastapi.tiangolo.com/)

## Synchronous Frameworks

Synchronous frameworks in python handle the flow of data in a synchronous manner. On a **synchronous** request, you make the request and stop executing your program until you get a response from the HTTP server (or an error if the server can't be reached, or a timeout if the sever is taking way, way too long to reply) The interpreter is blocked until the request is completed (until you got a definitive answer of what happened with the request: did it go well? was there an error? a timeout?... ).

Visit the following resources to learn more:

- [Sync vs. Async Python: What is the Difference?](https://blog.miguelgrinberg.com/post/sync-vs-async-python-what-is-the-difference)

### Django

Django is a free and open-source, Python-based web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit

Visit the following resources to learn more:

- [Django Official Website](https://www.djangoproject.com/)
- [Official Getting Started Guide](https://www.djangoproject.com/start/)
- [Python Django Tutorial for Beginners](https://www.youtube.com/watch?v=rHux0gMZ3Eg)
- [Is Django synchronous or asynchronous?](https://stackoverflow.com/questions/58548089/django-is-synchronous-or-asynchronous)

#### Directory structure

- `manage.py` - main file to run server, make apps
- `projectname` - main folder for the project
    - `url.py` - contains the mapping of the url to the project
    - `settings.py` - contains the setting of the installed apps, you can add apps here

#### Basic commands

- how to start new project `django-admin startproject projectname`
- how to create new app inside the project `python manage.py startapp appname`

#### Templating

- `{}`
- `{% %}`

#### Models

- after creating models you should do migrations
    - `python manage.py migrate`
- finish making migrations
    - `python manage.py makemigrations app_name`

### Flask

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.

Visit the following resources to learn more:

- [Flask - Official Website](https://flask.palletsprojects.com/)
- [Flask - Official Tutorial](https://flask.palletsprojects.com/en/2.2.x/tutorial/)

### Pyramid

Pyramid is a general, open source, web application development framework built in python. It allows python developer to create web applications with ease. Pyramid is backed by the enterprise knowledge Management System KARL (a George Soros project).

Visit the following resources to learn more:

- [Pyramid - Official Website](https://trypyramid.com/)
- [Pyramid Documentation](https://docs.pyramid.com/en/latest/)
- [Pyramid Framework Introduction](https://www.tutorialspoint.com/python_web_development_libraries/python_web_development_libraries_pyramid_framework.htm)

## Asynchronous

Asynchronous programming is a type of parallel programming in which a unit of work is allowed to run separately from the primary application thread. When the work is complete, it notifies the main thread about completion or failure of the worker thread.
This style is mostly concerned with the asynchronous execution of tasks. Python has several asynchronous frameworks that are used to implement asynchronous programming.

Visit the following resources to learn more:

- [Top 5 Asynchronous Web Frameworks for Python](https://geekflare.com/python-asynchronous-web-frameworks/)

### gevent

gevent is a Python library that provides a high-level interface to the event loop.
It is based on non-blocking IO (libevent/libev) and lightweight greenlets. Non-blocking IO means requests waiting for network IO won't block other requests; greenlets mean we can continue to write code in synchronous style.

Visit the following resources to learn more:

- [gevent - Official Website](http://www.gevent.org/)
- [GitHub Repository](https://github.com/gevent/gevent)
- [gevent For the Working Python Developer](https://sdiehl.github.io/gevent-tutorial/)

### AIOHTTP

aiohttp is a Python 3.5+ library that provides a simple and powerful asynchronous HTTP client and server implementation.

Visit the following resources to learn more:

- [Official Docs](https://docs.aiohttp.org/en/stable/)
- [Python Asyncio, Requests, Aiohttp | Make faster API Calls](https://www.youtube.com/watch?v=nFn4_nA_yk8)
- [Creating a RESTful API with Python and aiohttp](https://tutorialedge.net/python/create-rest-api-python-aiohttp/)

### Tornado

Tornado is a scalable, non-blocking web server and web application framework written in Python. It was developed for use by FriendFeed; the company was acquired by Facebook in 2009 and Tornado was open-sourced soon after.

Visit the following resources to learn more:

- [Tornado - Official Website](https://www.tornadoweb.org/)
- [A Step-by-Step Tutorial on Python Tornado](https://phrase.com/blog/posts/tornado-web-framework-i18n/)
- [Tornado Python Framework](https://www.youtube.com/watch?v=-gJ21qzpieA)

### Sanic

Sanic is a Python 3.7+ web server and web framework that&#39;s written to go fast. It allows the usage of the async/await syntax added in Python 3.5, which makes your code non-blocking and speedy.

Visit the following resources to learn more:

- [Sanic Official Website](https://sanic.dev/en/)
- [Introduction to Sanic Web Framework – Python](https://www.geeksforgeeks.org/introduction-to-sanic-web-framework-python/)
