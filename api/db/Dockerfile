FROM postgres:13.2-alpine

WORKDIR /db

COPY initdb.sql /docker-entrypoint-initdb.d/

COPY . .

EXPOSE 5432