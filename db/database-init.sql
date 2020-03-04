DROP DATABASE IF EXISTS `tinysis_development`;
CREATE DATABASE `tinysis_development`;
CREATE USER IF NOT EXISTS `tinysis_development`@`localhost` IDENTIFIED BY 'tinysis_development';
GRANT ALL PRIVILEGES ON tinysis_development.* to `tinysis_development`@`localhost`;

DROP DATABASE IF EXISTS `tinysis_test`;
CREATE DATABASE `tinysis_test`;
CREATE USER IF NOT EXISTS `tinysis_test`@`localhost` IDENTIFIED BY 'tinysis_test';
GRANT ALL PRIVILEGES ON tinysis_test.* to `tinysis_test`@`localhost`;
