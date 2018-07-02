# README


GRANT CREATE ON nova_test.* TO nova_test@localhost;
GRANT ALL PRIVILEGES ON nova_test.* to `nova_test`@`localhost`;

rake db:test:prepare

bundle exec rspec
