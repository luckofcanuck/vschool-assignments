var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "cartoonService", function ($scope, cartoonService) {



	$scope.submit = function (cartoon) {
		cartoonService.submission(cartoon);
	}

	$scope.cartoons = cartoonService.cartoons;


}])