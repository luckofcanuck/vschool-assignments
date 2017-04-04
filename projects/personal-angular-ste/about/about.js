var app = angular.module("myApp");

app.controller("aboutController", ["$scope", "bookService", function ($scope, bookService) {

	$scope.submit = function () {
		bookService.getAuthor($scope.userInput).then(function (response) {
			$scope.authorInfo = [];
			$scope.authorTitles = [];
			$scope.originalData = [];
			$scope.lowerTitles = [];
			var otherBooks = response.data.docs;
			for (var i = 0; i < otherBooks.length; i++) {
				$scope.originalData.push(otherBooks[i]);
			}
			for (var i = 0; i < $scope.originalData.length; i++){
				$scope.lowerTitles.push($scope.originalData[i].title.toLowerCase());
			}
			while ($scope.authorTitles.length < 20) {
				for (var i = 0; i < $scope.originalData.length; i++) {
					if ($scope.authorTitles.indexOf($scope.lowerTitles[i]) === -1) {
						$scope.authorTitles.push($scope.lowerTitles[i]);
						$scope.authorInfo.push($scope.originalData[i]);
					}
				}
			}
			console.log($scope.authorInfo);
		})
	}



}])