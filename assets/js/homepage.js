$(document).ready(function() {
// Event listener for search button
$("#run-search").on("click", function(event) {

event.preventDefault();

// Create a variable for the user input
var search = $("#user-input").val().trim();
    
    $("#search-bar-div").hide();

// Construct a URL to search user input in API

var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" +
        search + "&lat=34.0353061&lon=-118.3794192&radius=13%2C000" + "&apikey=abf456dfeacd356e5b295aa8cb32a4a6";

// AJAX Request
$.ajax({
          url: queryURL,
          method: "GET"
        })

// Store the search results in a variable
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.restaurants;

          console.log(results);
    
for (var i = 0; i < results.length; i++) {

                var listDiv = $("<div class='list-gen'>");
                var restResults = response.restaurants[i];
                var restName = restResults.restaurant.name;
                var restLoc = restResults.restaurant.location.address;
                var restRating = restResults.restaurant.user_rating.aggregate_rating;
                var dispAll = $("<p class='rest-list-item'>").html(restName + "<br>" + restLoc + "<br>" + "Rating: " + restRating + "<br>");
                listDiv.append(dispAll);
    console.log(restLoc);
 
    $("#list-view").append(listDiv);
};  
    
    
});
});
});