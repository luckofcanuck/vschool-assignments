var express = require("express");
var voteRouter = express.Router();
var Issue = require("../models/issue-schema");



voteRouter
.get("/", function(req, res){
	Issue.find(req.query, function(err, issues){
		res.send(issues);
	})
})

.post("/", function(req, res){
	newIssue = new Issue(req.body);
	newIssue.save(function(err, savedIssue){
		res.send(savedIssue);
	})
})

.delete("/:id", function(req, res){
	Issue.findByIdAndRemove(req.params.id, function(err, deletedIssue){
		res.send(deletedIssue + " has been deleted")
	})
})

.put("/:id", function(req, res){
	Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedIssue){
		res.send(editedIssue);
	})
})


module.exports = voteRouter;