var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var uuidV4 = require('uuid/v4');
var path = require("path");

var port = 3000;

app.use(bodyParser.json());	

app.use(express.static(path.join(__dirname, "public")));

var bounties = [{
		firstName: "Han",
		lastName: "Solo",
		living: false,
		bountyAmount: 59903,
		_id: "ec70e57f-7349-4574-a366-1598ade682a3"
    },
	{
		firstName: "Jaba",
		lastName: "Hutt",
		living: false,
		bountyAmount: 544,
		_id: "6cfc646c-9340-4341-81fb-561b0c93db19"
  	},
	{
		firstName: "Luke",
		lastName: "Skywalker",
		living: true,
		bountyAmount: 53,
		_id: "0fef6dae-df56-4911-9f3e-3b48b453f942"
	}
];

app.get("/bounty", function (req, res) {
	res.send(bounties);
	console.log(req.query);
})

app.post("/bounty", function (req, res) {
	var newBounty = req.body;
	newBounty._id = uuidV4();
	bounties.push(newBounty);
	res.send(req.body); 
})

//in the get request, if you do /bounty/Luke it will return that object with req.params, and whatever attribute (ie name) with req.params.name

app.get("/bounty/:_id", function (req, res) {
	var id = req.params._id;

	for (var i = 0; i < bounties.length; i++) {
		if (id === bounties[i]._id) {
			res.send(bounties[i])
		}
	}

})

app.delete("/bounty/:_id", function (req, res) {
	var id = req.params._id;

	for (var i = 0; i < bounties.length; i++) {
		if (id === bounties[i]._id) {
			res.send(bounties.splice(i, 1))
		}
	}
})



app.put("/bounty/:_id", function (req, res) {
	var id = req.params._id;
	var editedBounty = req.body;
	for (var i = 0; i < bounties.length; i++) {
		if (id === bounties[i]._id) {
			for (var key in req.body) {
				if (bounties[i][key] != req.body[key]) {
					bounties[i][key] = req.body[key];
				}
			}
		}
	}
	return res.send(editedBounty);
})



app.listen(port, function () {
	console.log("it's listening on port " + port);
})