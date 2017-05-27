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

app.directive("mikeTheMink", function(){
	return {
		template: "<img ng-hide='open' ng-mouseover='open = true' src='http://coursework.vschool.io/content/images/2015/06/download.jpg'/>"
	}
})



