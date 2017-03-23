var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function ($scope, $http) {

	var config = {
		headers: {
			"X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
		}
	}

	$scope.submission = function () {
		$http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.userInput, config)
			.then(function (response) {
				$scope.textResp = response.data;
			})
	}
}])