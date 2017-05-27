var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var path = require("path");
app.use(bodyParser.json());	
app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next){
	req.weAddedThis = "middle ware is cool";
	console.log(req.weAddedThis);
	res.send();
})

mongoose.connect("mongodb://localhost/bounty");
	var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
          console.log("DB connected");
    });




var bountyRouter = require("./route");
app.use("/bounty", bountyRouter);







app.listen(port, function () {
	console.log("it's listening on port " + port);
})



