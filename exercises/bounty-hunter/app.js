var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var uuidV4 = require('uuid/v4');

app.use(bodyParser.json());

var bounties = [];

app.get("/bounty", function (req, res){
	res.send(bounties);
})

app.post("/bounty", function (req, res){
	var newBounty = req.body;
	newBounty._id = uuidV4();
	bounties.push(newBounty);
	res.send(req.body);
})

app.listen(port, function(){
	console.log("it's listening on port" + port);
})