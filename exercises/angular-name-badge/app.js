var app = angular.module("myApp", []);

app.controller("myController", ["$scope", function($scope){
	
	$scope.badges = [];
	
	$scope.submission = function(newBadge){
		$scope.badges.push(newBadge);
		$scope.newBadge = {};
	}
	
}])

