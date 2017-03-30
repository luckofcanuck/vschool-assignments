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

	this.submission = function (newPoke) {
		this.pokes.push(newPoke);
		this.newPoke = {};
	}

	this.removal = function (input) {
		name.$index;
		this.pokes.splice(index, 1);
	}

})