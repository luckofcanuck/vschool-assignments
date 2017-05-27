var app = angular.module("dishApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/home", {
			controller: "homeController",
			templateUrl: "home/home.html"
		})
		.when("/contact", {
			controller: "contactController",
			templateUrl: "contact/contact.html"
		})
		.otherwise({
			redirectTo: "/home"
		})
}]);
