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
1.4, 2.8, "As an employee you get free brownies.", "If you're pissed you can put hair in the brownies.", "Pay us more, I know you sell enough damn bread bowls to do it.");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16819338", "b8yrvmds", "Dave", "Panera Bread", "12131 Ventura Blvd, Studio City 91604", 
"Panera is a great place to work in my opinion! There are two lovely customers that come in together all the time.. I think their names are Mike and Teresa. Anyway, they are just a delight to serve and make Panera more fun!", 
5.1, 4.9, "Saturday mornings when Mike & Teresa come in for breaky!", "Certain days Mike & Teresa don't come in and that's a bummer.", "Have Mike & Teresa come in more often! Maybe entice them with healthier options?");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16822928", "test123456", "Art", "Taco Bell", "1201 Santee St, Los Angeles 90015", 
"I worked at this store for four years and overall had a pretty good time but there was one manager Ron who was very unreasonable when asking for time off. One year he made me work during my grandma's 90th birthday party and he didn't let me go home, and I thought that was a total dick move.", 
3.0, 3.0, "Friendly staff, not super busy", "Ron and his bullshit scheduling", "FIRE RON");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16822928", "test123456", "Ron", "Taco Bell", "1201 Santee St, Los Angeles 90015", 
"I just switched over to a new fast food chain but wanted to say that this store was rotten.  There was one employee in particular always requesting time off at the most inopportune times...really made my life a living hell.  Most of the rest of the employees where lazy too.  SO SAD!", 
1.0, 3.0, "Great Breakfast", "Lazy employees", "Fire the lazy employees");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16814309", "test123456", "Lori", "Islands", "6081 Center Dr Fl 1, Los Angeles 90045", 
"I worked here as a bartender for two years. The staff was really friendly and I made really good friends with a lot of them, and my only complaint is that this store turned into a Raiders bar...I'm a Chargers fan, so you can imagine that wasn't a lot of fun for me", 
4.0, 3.0, "Great management, cool people", "Open till 2 am, get ready for super late nights", "Support the right team, you idiots");

INSERT INTO reviews (api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt)
VALUES ("16814309", "test123456", "Lucy", "Islands", "6081 Center Dr Fl 1, Los Angeles 90045", 
"Freaking hated working here.  I was a hostess for 9 months...management kept saying they were going to move me up.  Literally told me FOUR different times and kept finding excuses to delay it...it really left me no choice but to quit, cause I simply cannot make enough money on that salary...I need the tips from serving.  What a waste.", 
1.0, 3.0, "None", "Dishonest management that will lie right to your face", "Grow a backbone and tell the truth to people");


