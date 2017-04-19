var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cerealSchema = new Schema({  
	type: {
		type: String,
		required: true,
		unique: true
	},
	flavorProfile: {
		type: String,
		enum: ["fruity", "chocolatey", "granola-y", "cardboardy"]
	},
	cost: Number,
	delicious: Boolean
});

var Cereal = mongoose.model("Cereal", cerealSchema);


module.exports = Cereal;





//
//var mongoose = require('mongoose'); 
//
//var Schema = mongoose.Schema;
//
//var friendSchema = new Schema({  
//  name: String,
//  age: Number,
//  interests: [String],
//  friends: [String],
//  isDeveloper: Boolean
//});
//
//var Friend = mongoose.model('Friend', friendSchema); 
//
//module.exports = Friend;