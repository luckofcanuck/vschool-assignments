var app = angular.module("firstModule", []);

app.controller("mainController", ["$scope", function($scope){
	$scope.person = {
		name: "Alan",
		height: "1.8m",
	}
	
	$scope.whosThere = function(){
		return $scope.person.name + " is here and is " + " tall."
	}
	
}])