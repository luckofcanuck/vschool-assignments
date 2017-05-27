var app = angular.module("myApp");

app.service("serviceService", function($http){
	
	this.getYoda = function(userInput, config){
		var yodaResp = "";
		return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + userInput, config)
			.then(function(response){
			yodaResp = response.data
			console.log(yodaResp);
			return yodaResp;
		})
	}
})

