create database dataBaseTest;


 create table user (
id int not null auto_increment,
name varchar (10),
email varchar(20),
primary key (id)
);


create user 'springer'@'%' identified by 'root'; -- Creates the user
grant all on dataBaseTest.* to 'springer'@'localhost'; -- Gives


 grant select, insert, delete, update on dataBaseTest.* to 'springer'@'localhost';

 GRANT ALL PRIVILEGES ON springdb.* TO 'springer'@'localhost';


use dataBaseTest;
select * from user;


