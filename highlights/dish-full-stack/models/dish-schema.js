var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dishSchema = new Schema({
	dishName: {
		type: String,
		required: true
	},
	dishRestaurant: {
		type: String,
		required: true
	},
	cityOfRestaurant: {
		type: String,
		required: true
	},
	mainDishIngredient: {
		type: String,
		required: true
	},
	otherDishIngredients: [String],
	lightness: {
		type: String,
		required: true,
		enum: ["Very Light", "Light", "Average", "Heavy", "Very Heavy"]

	},
	price: {
		type: String,
		required: true,
		enum: ["Frugal Eats <$10", "", "Date Night <$20", "High Roller >$20"]

	},
	calories: Number,
	countryOfFoodOrigin: String,
	sidesToDish: [String],
	isAlcoholServed: Boolean,
	isRestaurantChain: Boolean,
	vegetarian: Boolean,
	glutenFree: Boolean,
	nutFree: Boolean,
	flaggedForRevision: Boolean,
	totalVotes: Number
});

var Dish = mongoose.model("Dish", dishSchema);


module.exports = Dish;
