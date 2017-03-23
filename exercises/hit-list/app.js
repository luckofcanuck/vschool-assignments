var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function($scope, $http){
	

	
	$http.get("http://api.vschool.io:6543/hitlist.json")
		.then(function (response){
		$scope.hits = response.data;
		console.log(hits);
	})
	
	
}])