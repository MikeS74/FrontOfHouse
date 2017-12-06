DROP DATABASE IF EXISTS frontOfHouse;

CREATE DATABASE frontOfHouse;

USE frontOfHouse;

CREATE TABLE reviews (
  api_id INT NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(45) NULL,
  user_name VARCHAR(45) NULL,
  review VARCHAR(300) NULL,
  PRIMARY KEY (item_id)
);