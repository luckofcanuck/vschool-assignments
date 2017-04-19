var app = angular.module("myApp");



app.service("issueService", function($http){
	
	this.getIssues = function(){
		var issues = [];
		return $http.get("http://localhost:8000/votes/")
			.then(function(response){
			issues = response.data;
			return issues
		})
	}
	
	this.deleteIssue = function(issue){
		return $http.delete("http://localhost:8000/votes/" + issue._id)
			.then(function(response){
				return response.data;
		})
	}
	
	this.submitIssue = function(issue){
		console.log(issue);
		return $http.post("http://localhost:8000/votes/", issue)
			.then(function(response){
				return response.data;
		})
	}
	
	this.editIssue = function(issue){
		console.log(issue);
		return $http.put("http://localhost:8000/votes/" + issue._id, issue);
	}
	
})