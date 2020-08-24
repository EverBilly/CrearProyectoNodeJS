Create database crud;

use crud;

create table customers(
    id int primaty key auto_increment,
    name text not null,
    address text not null,
    phone text not null
);

show tables;

describe customers;