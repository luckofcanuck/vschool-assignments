var app = angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
			.when("/about", {
				controller: "aboutController",
				templateUrl: "about/about.html"
			})
			.when("/whyilove", {
				controller: "loveController",
				templateUrl: "whyilove/whyilove.html"
			})
			.otherwise({
				redirectTo: "/index.html"
		})
}]);