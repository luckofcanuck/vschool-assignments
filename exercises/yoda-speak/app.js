var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "serviceService", function ($scope, serviceService) {

	var config = {
		headers: {
			"X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
		}
	}



	$scope.submission = function () {
		serviceService.getYoda($scope.userInput, config).then(function(yodaResp){
			$scope.textResp = yodaResp;
		}
)}
	
}])