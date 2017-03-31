var app = angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/home", {
			controller: "homeController",
			templateUrl: "home.html"
		})
		.when("/favorites", {
			controller: "favoritesController",
			templateUrl: "favorites.html"
		})
		.otherwise({
			redirectTo: "/home.html"
		})
}]);



app.service("pokeService", function () {

	this.pokes = [];

	this.newPoke = {};
	
	var self = this;

	this.submission = function (poke) {
		this.pokes.push(poke);
		this.newPoke = {};
	}

	this.removal = function (input) {
		for (var i = 0; i < self.pokes.length; i++){
			if (self.pokes[i].name === input){
				self.pokes.splice([i], 1);
			}
		}
	}
//	
//	this.getPoke() = function() {
//	var poke = {};
//	return $http.get("pokeapi/poke1")
//		.then(function(response){
//			poke.name = response.data.name;
//	 		poke.eyeColor = response.data.eye_color;
//			return $http.get(response.data.homeworld)
//		}).then(function(response){
	//		poke.homeworld = response.data.name  ((thisisthenameofhomeworld))
})
//	}
	//EXAMPLE OF USING API IN SERVICE

})