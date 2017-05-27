var app = angular.module("myApp");

app.controller("aboutController", ["$scope", "bookService", function ($scope, bookService) {

	$scope.submit = function () {
		bookService.getAuthor($scope.userInput).then(function (response) {
			$scope.authorInfo = response;
		})
	}
	
	if (bookService.author){
		bookService.getAuthor(bookService.author).then(function (response) {
			$scope.authorInfo = response;
		})
	}
}])