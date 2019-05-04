create database nova_test;
create database nova_development;

CREATE user `nova_test`@`localhost` identified by 'nova_test';
CREATE user `nova_development`@`localhost` identified by 'nova_development';

GRANT CREATE ON nova_test.* TO nova_test@localhost;
GRANT ALL PRIVILEGES ON nova_test.* to `nova_test`@`localhost`;

GRANT CREATE ON nova_development.* TO nova_development@localhost;
GRANT ALL PRIVILEGES ON nova_development.* to `nova_development`@`localhost`;
