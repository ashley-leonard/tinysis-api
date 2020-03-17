# README

This is an API server meant to provide the foundation of a V2 of TinySIS.

TinySIS is a feature-rich application that was developed around 2008 to serve the needs of the Nova Project, a public high school in Seattle. TinySIS is still in active use today, despite its dated implementation.

TinySIS provides status tracking features for staff members in this unique educational community, based on Washington State [ALE (Alternative Learning Experience)](http://www.k12.wa.us/ALD/AlternativeLearning) regulations.

TinySIS is a Rails 2 application running on Ruby 1.86. Updating it would be challenging, so I am experimenting with creating a parallel client/server solution that would first seek to provide a refreshed, modern experience for the staff members working directly with kids, and longer-term, to replace the administrative backend features that TinySIS provides for the important functions of integrating the data with the District.

This project will provide an API server that serves JSON data feeds and basic CRUD functionality for contract creation, status reporting, and enrollment tracking. 

A future project will implement a modern, single-page UX consuming these APIs.

## Prerequisites

To run using the docker setup (recommended), you need to install docker and docker-compose.

To run natively, you need Ruby 2.6 and mysql server, and possibly, libmysqlclient-dev

## Config

You will need AWS credentials to download the secrets. Contact dev@tinysis.org for access.

Then run:

    ./tiny-utils.sh setupApi

## Is the server up?

    http://localhost:3000/up

## Running using docker-compose

Create the dev and test databases:

    ./tiny-utils.sh setupDb

Then start the API docker stack:

    ./tiny-utils startApi

Run the script without arguments to see other commands.

## Running the server natively

To run the system on your local machine, you must first install the necessary gems, init the database,
and then run the server.

    bundle install
    rake db:create
    rake db:migrate
    rake db:seed
    rails s

### Running tests

    rake db:test:prepare
    bundle exec rspec

Running only some tests (filter by name)

    bundle exec rspec --example "Statuses"

## Database notes

    create database nova_test;
    create database nova_development;

    CREATE user `nova_test`@`localhost` identified by 'nova_test';
    CREATE user `nova_development`@`localhost` identified by 'nova_development';

    GRANT CREATE ON nova_test.* TO nova_test@localhost;
    GRANT ALL PRIVILEGES ON nova_test.* to `nova_test`@`localhost`;

    GRANT CREATE ON nova_development.* TO nova_development@localhost;
    GRANT ALL PRIVILEGES ON nova_development.* to `nova_development`@`localhost`;

    rake db:test:prepare
