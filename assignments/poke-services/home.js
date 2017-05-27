var app = angular.module("myApp");

app.controller("homeController", ["$scope", "pokeService", function($scope, pokeService){
	
	$scope.submission = function(poke){
		pokeService.submission(poke);
		$scope.poke = {};
	}
	
	$scope.removal = function(input){
		pokeService.removal(input)
	}
	
//	pokeService.getPoke().then(function(poke){
//		$scope.poke = poke
//	})
	//EXAMPLE OF USING SERVICE AND CONTROLLER AND API
//

}])


