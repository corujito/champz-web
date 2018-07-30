# Our base image is Ruby 2.3, running on Alpine Linux.
FROM ruby:2.5.1-alpine

MAINTAINER Kleber Manoel Infante (Corujito) <corujito@gmail.com>

ENV PACKAGES bash curl-dev ruby-dev build-base nodejs postgresql-dev tzdata

RUN apk update && \
    apk upgrade && \
    apk add --update\
    $PACKAGES && \
    rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app

#ENV RAILS_SERVE_STATIC_FILES 1
ENV RAILS_LOG_TO_STDOUT 1
ENV RAILS_ENV production
ENV RACK_ENV production

COPY Gemfile Gemfile.lock ./
RUN bundle install --binstubs --jobs 4 --without development test --with production
# Delete APK and gem caches.
RUN find / -type f -iname \*.apk-new -delete && \
    rm -rf /var/cache/apk/* && \
    rm -rf /usr/local/lib/ruby/gems/*/cache/* && \
    rm -rf ~/.gem

COPY . .
RUN bundle exec rake DOMAIN_NAME=fake assets:precompile

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]