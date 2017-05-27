var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var dishRouter = require("./routes/dish-router");
var advancedRouter = require("./routes/advanced-router");
var request = require("request");
var path = require("path");


mongoose.connect("mongodb://localhost/full-stack-food-app", function(err){
	console.log("connected to DB");
})


app.use(bodyParser.json());
app.use("/dishes", dishRouter);
app.use("/dishes/advanced", advancedRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, function(){
		  console.log("listening on 8000")
})
