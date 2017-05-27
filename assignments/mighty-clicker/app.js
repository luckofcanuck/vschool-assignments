var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "countService", function($scope, countService){
	
	
	$scope.blueCount = countService.blueCount;
	
	$scope.redCount = countService.redCount;
	
	$scope.redClick = countService.redClicker;
	
	$scope.blueClick = countService.blueClicker;
	
	
}])

