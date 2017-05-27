var app = angular.module("dishApp");


app.controller("homeController", ["$scope", "searchService", "advService", "putService", "postService", "yelpService", function($scope, searchService, advService, putService, postService, yelpService){


	var config = {
		headers: {
			Authorization: "Bearer 5P8xDz98WMINK1G823jGSMdxjOkoaQnWOUwfytpuX0jI_qFHWL2c0P8DsXfF2y1D0aen2VzbR90DLqnR6VdfH0_NUfLIv0K087og-2HEcaA5qA5XjVodwRlSCnv2WHYx"
		}
	}

	$scope.dishes = [];

//make sure the get service sorts the response by votes before returning dishes here//
	$scope.getAll = function(input){
		searchService.getAll(input)
			.then(function(dishes){
			$scope.dishes = dishes;
			console.log(dishes);
		})
	}


//give the submit service a filter that capitalizes things//
	$scope.submitNew = function(input){
		postService.submitNew(input)
		.then(function(data){
			$scope.dishes.push(data);
		})
		input = {};
	}

// make sure service sorts by votes before returning//
	$scope.advSearch = function(input){
		advService.advSearch(input)
		.then(function(dishes){
			$scope.dishes = dishes;
		})
		input = {};
	}



	$scope.up = function(dish){
		dish.totalVotes = (dish.totalVotes + 1);
		putService.editDish(dish)
	}

	$scope.down = function(dish){
		dish.totalVotes = (dish.totalVotes -1);
		putService.editDish(dish)
	}

	$scope.flag = function(dish){
		dish.flaggedForRevision = true;
		putService.editDish(dish)
	}



	$scope.yelp = function(rest, city){
		yelpService.getYelp(rest, city, config)
		.then(function(response){
			console.log(response);
		})
	}


}])
