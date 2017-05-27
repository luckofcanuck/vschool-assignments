var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var issueSchema = new Schema({  
	title: String,
	description: String,
	currentVoteCount: Number,
	totalVotes: Number, 
	comments: [String]
});

var Issue = mongoose.model("Issue", issueSchema);


module.exports = Issue;





