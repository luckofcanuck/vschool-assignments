var request = require('request');

// include header and city and restaurant

.get("/yelpsearch", function(req, res){
  request('http://api.yelp.com/v3/businesses/search?term=', function(error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body': body);
  })
})
