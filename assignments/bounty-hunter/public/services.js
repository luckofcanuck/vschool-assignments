var app = angular.module("myApp");

app.service("bountyService", function($http){
	
	this.getBounties = function(){
		var bounties = "";
		return $http.get("http://localhost:3000/bounty")
			.then(function(response){
			bounties = response.data;
			return bounties
		})
	}
	
	this.deleteBounty = function(bounty){
		return $http.delete("http://localhost:3000/bounty/" + bounty._id)
			.then(function(response){
				return response.data;
		})
	}
	
	this.submitBounty = function(bounty){
		console.log(bounty);
		return $http.post("http://localhost:3000/bounty", bounty)
			.then(function(response){
				bounty = {};
				return response.data;
		})
	}
	
	this.editBounty = function(bounty){
		return $http.put("http://localhost:3000/bounty/" + bounty._id, bounty);
	}
})