# FrontOfHouse 

Restaurant workers, listen up!  Ever wondered what you are getting into when you start a new job?  Well, the answer is here!  Front Of House is the app that can answer all of the unknown questions that usually take months of time working at an establishment to find out.  With Front Of House you can have insight into  restaurants' pros and cons, style of management and general review from both current and former employees.  Take a peek behind the curtain with the greatest thing to happen to restaurants since tipping! 

http://bit.ly/front-of-house

(Search Panera Bread, Taco Bell and Islands for example reviews)

## How To Use The App

- Upon page load, the user will fill in the prompted information

- Click submit and the user will be taken to a review page 

## Requirements

- Must use a Node and Express Web Server

- Must be backed by a MySQL Database with a Sequelize ORM  

- Must have both GET and POST routes for retrieving and adding new data

- Must be deployed using Heroku (with Data)

- Must utilize at least one new library, package, or technology that we haven’t discussed

- Must have a polished frontend / UI 

- Must have folder structure that meets MVC Paradigm

- Must meet good quality coding standards (indentation, scoping, naming)

## Technologies Used

- JavaScript

- jQuery, AJAX, and JSON

- Node.js, Express and Handlebars

- MySQL and Sequelize

- Heroku

- ORM

## Code Explaination
Both jQuery and typehead.js take in search terms and connect to the Zomato API simultaneously giving word suggestions and performing a restaurant search. 

A JavaScript 'for loop' grabs and pushes results into a 'div' to generate a list the user can click on. 

Once the user clicks a restaurant from the list, the API info is temporarily stored in a SQL table and used to generate a 'restaurant profile' with matched reviews from a separate 'reviews' table.

A JavaScript if statement then checks the current restaurant against the 'reviews' table with an AJAX GET request so jQuery can display user reviews for only that restaurant.

The user can then add a review for the current restaurant with an HTML form, jQuery and an AJAX POST to the 'reviews' SQL table.
