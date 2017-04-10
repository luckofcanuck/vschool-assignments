var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var fruit = [
	{
		"type": "banana",
		"brand": "chiquita",
		"price": "0.5"
	},
	{
		"type": "apple",
		"brand": "gala",
		"price": "0.5"
	},
	{
		"type": "orange",
		"brand": "naval",
		"price": "0.85"
	},
	{
		"type": "apple",
		"brand": "macintosh",
		"price": "1"
	}
];

app.get("/fruit", function(req, res){
	console.log(req.query);
	var foundItems = [];
	
	for (var i = 0; i < fruit.length; i++){
        var haveFoundExactMatch = true; 
        for (var key in req.query){
           if (req.query[key] != fruit[i][key]){
               haveFoundExactMatch = false;
           }
        }
        if (haveFoundExactMatch){
            foundItems.push(fruit[i]);
        }
    }
	res.send(foundItems);
});




app.listen(3000, function () {
  console.log('Ready');
});


