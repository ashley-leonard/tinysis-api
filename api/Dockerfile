FROM ruby:2.6.3

ENV LANG C.UTF-8
ENV RAILS_ENV production

RUN apt-get update -qq
RUN apt-get install -y build-essential

ENV API_HOME /api
RUN mkdir -p $API_HOME
WORKDIR $API_HOME

COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test

COPY . $API_HOME

EXPOSE 3000
