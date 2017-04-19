var express = require("express");
var cerealRoute = express.Router();
var Cereal = require("../models/cereal-schema");




cerealRoute.get("/", function(req, res){
	Cereal.find(req.query, function(err, cereals){
		res.send(cereals);
	})
})

cerealRoute.post("/", function(req, res){
	newCereal = new Cereal(req.body);
	newCereal.save(function(err, addedCereal){
		res.send(addedCereal);
	})
})

cerealRoute.delete("/:id", function(req, res){
	Cereal.findByIdAndRemove(req.params.id, function(err, cerealDeleted){
		res.send(cerealDeleted + " has been deleted")
	})
})

cerealRoute.put("/:id", function(req, res){
	Cereal.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, cerealChanged){
		res.send(cerealChanged);
	})
})

module.exports = cerealRoute;






//
//var express = require("express");
//var friendRoute = express.Router();
//var Friend = require("../models/friend-schema");
//
//friendRoute
//
//.get("/", function (req, res) {
//    Friend.find(req.query, function (err, friendsArray) {
//        res.send(friendsArray);
//    })
//})
//
//.post("/", function (req, res) {
//    newFriend = new Friend(req.body);
//    newFriend.save(function (err, savedFriend) {
//        res.send(savedFriend);
//    });
//})
//
//.delete("/:id", function(req, res){
//    Friend.findByIdAndRemove(req.params.id, function(err, deletedFriend){
//       res.send(deletedFriend)
//    })
//})

//.put("/:id", function(req, res){
//    Friend.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedFriend){
//        res.send(editedFriend); 
//    })
//})
//
//module.exports = friendRoute