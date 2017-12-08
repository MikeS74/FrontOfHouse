$(document).ready(function() {
	console.log("hi");
  // constructs the suggestion engine
  var restaurants = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: 'https://developers.zomato.com/api/v2.1/search?q=%QUERY&lat=34.0353061&lon=-118.3794192&radius=13%2C000&apikey=abf456dfeacd356e5b295aa8cb32a4a6',
      wildcard: '%QUERY',
      transform: function(data) {
      	console.log('data', data)
          return $.map(data.restaurants, function (restaurant) {
                return {
                    value: restaurant.restaurant.name
                };
          });
      },
    }
  });
  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1	
  },
  {
    name: 'restaurants',
    source: restaurants,
    display: function(item) {
      console.log(item)
      return item.value;
    }
  });
});

