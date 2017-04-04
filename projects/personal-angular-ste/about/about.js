var app = angular.module("myApp");

app.controller("aboutController", ["$scope", "bookService", function($scope, bookService){
	
	bookService.getReviews($scope.userInput).then(function(reviews){
		$scope.reviews = reviews;
	})
	
	bookService.getAuthor($scope.authorInput).then(function(authorURL){
		$scope.author = authorURL;
	})

	
}])



									  
				
