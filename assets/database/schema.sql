CREATE TABLE IF NOT EXISTS ingredient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    price double NOT NULL
);

CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    price double NOT NULL
);

CREATE TABLE IF NOT EXISTS invoice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total double NOT NULL
    product varchar(50) NOT NULL,
    ingredient1 varchar(50),
    ingredient2 varchar(50),
    ingredient3 varchar(50),
    ingredient4 varchar(50),
);