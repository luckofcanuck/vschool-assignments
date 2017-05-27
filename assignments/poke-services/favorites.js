var app = angular.module("myApp");

app.controller("favoritesController", ["$scope", "pokeService", function($scope, pokeService){
	
	$scope.pokes = pokeService.pokes;
	console.log($scope.pokes)
	
}])
