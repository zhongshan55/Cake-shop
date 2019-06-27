set names utf8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE cake CHARSET=UTF8;
USE cake;
CREATE TABLE users(
 uid int primary key auto_increment,
 uname varchar(32),
 upwd  varchar(32) default "123456",
 phone char(11),
 birthday varchar(32) default "1990-01-01",
 user_name varchar(32) 
);
insert into users(uname,phone,user_name) values("xiaoming","13800123456","小明");