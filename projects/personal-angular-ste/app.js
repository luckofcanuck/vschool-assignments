var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/about", {
			controller: "aboutController",
			templateUrl: "about/about.html"
		})
		.when("/whyilove", {
			controller: "loveController",
			templateUrl: "whyilove/whyilove.html"
		})
		.when("/home", {
			controller: "homeController",
			templateUrl: "home/home.html"
		})
}]);

app.service("bookService", function ($http) {


	
	
	this.getAuthor = function (userAuthor) {
		return $http.get("http://openlibrary.org/search.json?author=" + userAuthor);
	}
})




//	this.getTemp = function(){
//		return $http.jsonp("https://api.darksky.net/forecast/848c374203fe14c192f3c6a7cfe43c9f/40.87608,-111.8910?callback=JSON_CALLBACK").then(function(response){
//			var currentTemp = response.data.currently.temperature;
//			return currentTemp;
//		})
//