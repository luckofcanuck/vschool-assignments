var app = angular.module("myApp", []);

app.controller("myController", ["$scope", function($scope){
	$scope.submission = function(){
		$scope.newBadge = {
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			email: $scope.email,
			birthPlace: $scope.birthPlace,
			phone: $scope.phone,
			food: $scope.food,
			bio: $scope.bio
		}
	}
	
}])

function newThingy(){
	$(".newspot").append("<div class='well'><div class='row'><h4>Hi my name is....</h4></div><div class='row'><div class='madeInput'>{{newBadge.firstName}}</div><div class='madeInput pull-right'>{{newBadge.lastName}}</div></div><div class='row'><div class='madeInput'>{{newBadge.email}}</div><div class='madeInput pull-right'>{{newBadge.birthPlace}}</div></div><div class='row'><div class='madeInput'>{{newBadge.phone}}</div><div class='madeInput pull-right'>{{newBadge.food}}</div></div><div class='row'><div class='madeInput' id='bioo'>{{newBadge.bio}}</div></div></div>")
}



