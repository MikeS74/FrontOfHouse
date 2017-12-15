DROP DATABASE IF EXISTS frontOfHouse;

CREATE DATABASE frontOfHouse;

USE frontOfHouse;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  api_id VARCHAR(50) NULL,
  user_id VARCHAR(50) NULL,
  user_name VARCHAR(50) NULL,
  business_name VARCHAR(100) NULL,
  business_loc VARCHAR(100) NULL,
  business_review VARCHAR(500) NULL,
  star_rating DECIMAL(2, 1) NULL,
  overall_rating DECIMAL(2, 1) NULL,
  pros VARCHAR(500) NULL,
  cons VARCHAR(500) NULL,
  suggestion_to_mgmt VARCHAR (500) NULL,
  date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE restProfile (
  id int NOT NULL,
  api_id VARCHAR(50) NULL,
  business_name VARCHAR(100) NULL,
  business_loc VARCHAR(100) NULL,
  customer_rating DECIMAL(2, 1) NULL
);

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16819338", "tv26cbyx", "Matt", "Panera Bread", "12131 Ventura Blvd, Studio City 91604", 
"When I worked at Panera, we put hair in the brownies because we hate our jobs and we're sick of making brownies. They should pay us more and quit giving everyone and their dog's Panera membership cards!", 
1, 2, "As an employee you get free brownies.", "If you're pissed you can put hair in the brownies.", "Pay us more, I know you sell enough damn bread bowls to do it.");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16819338", "b8yrvmds", "Dave", "Panera Bread", "12131 Ventura Blvd, Studio City 91604", 
"Panera is a great place to work in my opinion! There are two lovely customers that come in together all the time.. I think their names are Mike and Teresa. Anyway, they are just a delight to serve and make Panera more fun!", 
5, 4, "Saturday mornings when Mike & Teresa come in for breaky!", "Certain days Mike & Teresa don't come in and that's a bummer.", "Have Mike & Teresa come in more often! Maybe entice them with healthier options?");