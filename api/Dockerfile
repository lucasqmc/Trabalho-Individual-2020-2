FROM python:3

ENV PYTHONUNBUFFERED=1

RUN mkdir /api

EXPOSE 8000

WORKDIR /api

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

ADD . /api/

CMD ["bash", "-c", "python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:$PORT"]

