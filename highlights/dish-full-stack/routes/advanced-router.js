var express = require("express");
var advancedRouter = express.Router();
var Dish = require("../models/dish-schema");



advancedRouter
.get("/", function(req, res){
	console.log(req.query);
	Dish.find(req.query, function(err, dishes){
		res.send(dishes);
	})
})

module.exports = advancedRouter;
