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

//app.service("bookService", ["$scope", "bookService" function($scope, bookService){
//								
//			
//								
//								
//						
//}])
