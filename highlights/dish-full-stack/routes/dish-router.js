var express = require("express");
var dishRouter = express.Router();
var Dish = require("../models/dish-schema");



dishRouter
.get("/", function(req, res){
	Dish.find({$or:[{dishName: {$regex: req.query.searchTerm, $options: "i"}}, {mainDishIngredient: {$regex: req.query.searchTerm, $options: "i"}}, {dishRestaurant: {$regex: req.query.searchTerm, $options: "i"}}, {cityOfRestaurant: {$regex: req.query.searchTerm, $options: "i"}}]}, function(err, dishes){
		res.send(dishes);
		console.log(req.query);
	})
})

.post("/", function(req, res){
	newDish = new Dish(req.body);
	newDish.save(function(err, savedDish){
		if (err){
			throw err;
		}
		res.send(savedDish);
	})
})

.delete("/:id", function(req, res){
	Dish.findByIdAndRemove(req.params.id, function(err, deletedDish){
		res.send(deletedDish + " has been deleted")
	})
})

.put("/:id", function(req, res){
	Dish.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedDish){
		if (err){
			throw err;
		}
		res.send(editedDish);
	})
})


module.exports = dishRouter;
