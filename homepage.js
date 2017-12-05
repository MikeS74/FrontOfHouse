// Event listener for search button
$("#run-search").on("click", function(event) {

event.preventDefault();

// Create a variable for the user input
var search = $("#user-input").val().trim();
var search = $(this).attr("data-search");

// Construct a URL to search user input in API
var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" +
        search + "&lat=34.0353061&lon=-118.3794192&radius=13%2C000";

// AJAX Request
$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {

// Store the search results in a variable
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;
