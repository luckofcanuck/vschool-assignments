var app = angular.module("myApp");

app.controller("homeController", ["$scope", "pokeService", function($scope, pokeService){
	
	$scope.submission = function(poke){
		pokeService.submission(poke);
	}
	
	$scope.removal = function(input){
		pokeService.removal(input)
	}
}])


