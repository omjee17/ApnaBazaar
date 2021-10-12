## Preparing the Database

--- sql
create database shopdb;
create user shopper identified with mysql_native_password by 'shoppass';
use shopdb;
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;

