var app = angular.module("myApp");


app.controller("homeController", ["$scope", "$location", "bookService", function ($scope, $location, bookService) {

	$scope.clickedHome = function (gathered) {
		bookService.author = gathered;
		$location.url("home");
	}




	bookService.getTodos().then(function (todos) {
		$scope.todos = todos;
	})

	
	$scope.newTodo = {};

	
	$scope.newTodoSub = function (newTodo) {
		bookService.submit(newTodo).then(function (data) {
			console.log(data)
		})
	}

	
	$scope.adminButton = function (newTodo) {
		if (prompt("What is the password?") !== "1h8aNNkjn0u8UIUdnx3") {
			console.log("wrong-o")
		} else {
			$scope.newTodoSub(newTodo);
			bookService.getTodos().then(function (todos) {
				$scope.todos = todos;
			})
		}
	}

}])





