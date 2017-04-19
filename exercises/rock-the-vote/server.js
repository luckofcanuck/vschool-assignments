var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var voteRouter = require("./routes/vote-router");
var mongoose = require("mongoose");
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/rock-the-vote", function(err){
	if (err) throw err;
	console.log("connected to db");
});
app.use("/votes", voteRouter);


var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, function(){
	console.log("running on 8000");
})









