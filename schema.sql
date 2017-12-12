DROP DATABASE IF EXISTS frontOfHouse;

CREATE DATABASE frontOfHouse;

USE frontOfHouse;

CREATE TABLE reviews (
  api_id INT NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(50) NULL,
  user_name VARCHAR(50) NULL,
  business_name VARCHAR(100) NULL,
  business_loc VARCHAR(100) NULL,
  business_review VARCHAR(500) NULL,
  star_rating INT NULL,
  overall_rating INT NULL,
  pros VARCHAR(500) NULL,
  cons VARCHAR(500) NULL,
  suggestion_to_mgmt VARCHAR (500) NULL,
  date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (api_id)
);

