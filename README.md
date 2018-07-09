# README

This is an API server meant to provide the foundation of a V2 of TinySIS.

TinySIS is a feature-rich application that was developed around 2008 to serve the needs of the Nova Project, a public high school in Seattle. TinySIS is still in active use today, despite its dated implementation.

TinySIS provides status tracking features for staff members in this unique educational community, based on Washington State [ALE (Alternative Learnining Experience)](http://www.k12.wa.us/ALD/AlternativeLearning) regulations.

TinySIS is a Rails 2 application running on Ruby 1.86. Updating it would be challenging, so I am experimenting with creating a parallel client/server solution that would first seek to provide a refreshed, modern experience for the staff members working directly with kids, and longer-term, to replace the administrative backend features that TinySIS provides for the important functions of integrating the data with the District.

This project will provide an API server that serves JSON data feeds and basic CRUD functionality for contract creation, status reporting, and enrollment tracking. 

A future project will implement a modern, single-page UX consuming these APIs.

## Running tests

    bundle exec rspec

Running only some tests (filter by name)

    bundle exec rspec --example "Statuses"

## Database notes (for Eric, who is rusty on MySQL)

    GRANT CREATE ON nova_test.* TO nova_test@localhost;
    GRANT ALL PRIVILEGES ON nova_test.* to `nova_test`@`localhost`;

    rake db:test:prepare

