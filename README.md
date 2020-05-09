# TinyALE

This is an API server meant to provide the foundation of a V2 of TinySIS.

TinySIS is a feature-rich application that was developed around 2008 to serve the needs of the [Nova Project](http://novaknows.com/), a public high school in Seattle. TinySIS is still in active use today, despite its dated implementation.

TinySIS provides status tracking features for staff members in this unique educational community, based on Washington State [ALE (Alternative Learning Experience)](http://www.k12.wa.us/ALD/AlternativeLearning) regulations.

TinySIS is a Rails 2 application running on Ruby 1.86. Updating it would be challenging, so I am experimenting here with creating a parallel client/server solution that would first seek to provide a refreshed, modern experience for the staff members working directly with kids, and longer-term, to replace the administrative backend features that TinySIS provides for the important functions of integrating the data with the District.

This project will provide an API server that serves JSON data feeds and basic CRUD functionality for contract creation, status reporting, enrollment tracking, and all other features supported by the first version. 

## Prerequisites

To run using the docker setup (recommended), you need to install docker and docker-compose.

To run natively, you need Ruby 2.6 and mysql server, and possibly, libmysqlclient-dev

## General workflow

There is a (hopefully) helpful shell script that offers various choices:

    ./tiny

Then run:

    ./tiny getSecrets
    ./tiny build
    ./tiny initDb

Confirm the successful setup by visiting:

    http://localhost:3000/up

If that tests out alright, visit the app by going to:

    http://localhost:3000


### Config organization and editing

Set env `RAILS_MASTER_KEY` to the contents of the `config/master.key` file downloaded from S3.

To edit/view the credentials file, open a shell on the container using `./tiny shell:api` and then run:

    EDITOR="code -wait" rails credentials:edit


# Running the server natively

To run the system on your local machine, you must first install the necessary gems and MYSQL support, init the database,
and then run the server.

    bundle install
    rake db:create
    rake db:migrate
    rake db:seed
    rails s

## Running tests

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

