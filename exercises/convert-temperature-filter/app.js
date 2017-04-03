var app = angular.module("myApp", []);

app.controller("myController", ["tempService", "$scope", function(tempService, $scope){
	
	$scope.weather = "";
	
	

	tempService.getTemp().then(function(currentTemp){
			$scope.weather = Math.round(currentTemp);
			console.log($scope.weather);
		})
	
	
	$scope.temps = [10, 15, 20, 25, 30];
	
	$scope.data = {
		singleSelect: "f",
		option1: "f",
		option2: "k",
		option3: "c"
	}
	
}])

app.filter("toCelcius", function(){
	return function(temp){
		var output = Math.round((temp - 32) * 5.0 / 9.0);
		return output;
	}
})

app.filter("toFahrenheit", function(){
	return function(temp){
		var output = Math.round(temp * 9.0 / 5.0 + 32);
		return output;
	}
})

app.filter("toKelvin", function(){
	return function(temp){
		var output = Math.round((temp + 459.67) * 5.0 / 9.0);
		return output;
	}
})


