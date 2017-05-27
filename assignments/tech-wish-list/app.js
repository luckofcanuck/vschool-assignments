var app = angular.module("myApp", ["ngRoute"]);
	
app.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
			.when("/commonTech", {
				controller: "commonController",
				templateUrl: "commonTech/commonTech.html"
			})
			.when("/extraTech", {
				controller: "extraController",
				templateUrl: "extraTech/extraTech.html"
			})
			.otherwise({
				redirectTo: "/index.html"
			})
	}])


app.filter("toEuros", function(){
	return function(price){
		var output = (price * .94);
		return output;
	}
})

