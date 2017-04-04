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

	this.getReviews = function (userInput) {
//		var config = {
//			transformResponse: function(value) {
//				console.log(value);
//				return value;
//			}
//		}
		return $http.get("http://www.goodreads.com/book/title.json?format=json&key=pQ8fexiuU74u8Grhz54g&title=to kill a mockingbird").then(function (response) {
			console.log(response.data);
//			var reviews = response.data;
//			return reviews;
		})
	}
	
	
	this.getAuthor = function (userAuthor) {
		return $http.get("http://www.goodreads.com/api/author_url/Stephen King&key=pQ8fexiuU74u8Grhz54g").then(function (response) {
			console.log(response.data);
	})
		
	}
})




//	this.getTemp = function(){
//		return $http.jsonp("https://api.darksky.net/forecast/848c374203fe14c192f3c6a7cfe43c9f/40.87608,-111.8910?callback=JSON_CALLBACK").then(function(response){
//			var currentTemp = response.data.currently.temperature;
//			return currentTemp;
//		})
//