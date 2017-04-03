var app = angular.module("myApp");

app.service("tempService", ["$http", function($http){

	
	this.getTemp = function(){
		return $http.jsonp("https://api.darksky.net/forecast/848c374203fe14c192f3c6a7cfe43c9f/40.87608,-111.8910?callback=JSON_CALLBACK").then(function(response){
			var currentTemp = response.data.currently.temperature;
			return currentTemp;
		})
	}
	
	
	
}])