var app = angular.module("myApp", []);

app.controller("myController", ["$scope", function($scope){
	$scope.cars = [];
								
	$scope.submit = function(newCar){
		$scope.cars.push(newCar);
		$scope.newCar = {};
	}
								
	$scope.delete = function(i){
		$scope.cars.splice(i, 1);
	}							
								
}])