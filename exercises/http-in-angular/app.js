var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function($scope, $http){
	
	$http.get("http://pokeapi.co/api/v1/pokemon/1")
		.then(function (response){
		console.log(response.data);
	})
	
	
	var todos = {
		title: "Buy Fish",
		description: "Not Salmon",
		completed: false
	}
	
	$http.post("http://api.vschool.io/tim/todo/", todos)
		.then(function (response){
		console.log(response.data);
	})
	
}])