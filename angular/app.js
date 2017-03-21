var app = angular.module("myApp", []);

app.controller("mainController", ['$scope', function($scope){
	$scope.person = {
		firstName: "John",
		lastName: "Johnson"
	};
	
	$scope.house = "This is my house."
	
	$scope.getName = function(){
		return $scope.person.firstName + " " + $scope.person.lastName;
	}
}]);