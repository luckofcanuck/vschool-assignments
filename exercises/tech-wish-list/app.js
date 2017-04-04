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
		var output = Math.round((temp - 32) * 5.0 / 9.0);
		return output;
	}
})

app.filter("toDollars", function(){
	return function(price){
		var output = Math.round(temp * 9.0 / 5.0 + 32);
		return output;
	}
})