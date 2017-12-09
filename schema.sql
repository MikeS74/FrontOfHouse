DROP DATABASE IF EXISTS frontOfHouse;

CREATE DATABASE frontOfHouse;

USE frontOfHouse;

CREATE TABLE reviews (
  api_id INT NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(45) NULL,
  user_name VARCHAR(45) NULL,
  business_name VARCHAR(45) NOT NULL,
  business_review VARCHAR(200) NOT NULL,
  star_rating INT NOT NULL,
  overall_rating INT NOT NULL,
  pros VARCHAR(200) NULL,
  cons VARCHAR(200) NULL,
  suggestion_to_mgmt VARCHAR (200) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (api_id)
);

INSERT INTO reviews (api_id, user_id, user_name, review)
VALUES (123, 1, "Mike", "This place sucks" );