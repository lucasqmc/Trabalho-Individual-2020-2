FROM python:3

ENV PYTHONUNBUFFERED=1

RUN mkdir /api

EXPOSE 8000

WORKDIR /api

RUN pip3 install django djangorestframework psycopg2 django-cors-headers

ADD . /api/

