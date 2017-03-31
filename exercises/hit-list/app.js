var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "serviceService", function($scope, serviceService){
	
	serviceService.getStuff().then(function(hits){
			$scope.hits = hits;
			console.log($scope.hits)
		})
	
}])