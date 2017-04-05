var app = angular.module("myApp");

app.controller("homeController", ["$scope", "$location", "bookService", function($scope, $location, bookService){
	
	$scope.clickedHome = function(gathered){
		bookService.author = gathered;
		$location.url("more-authors");
	}
	
	
	
	
	bookService.getTodos().then(function(todos){
		$scope.todos = todos;
	})
	
	$scope.newTodo = {};

	$scope.newTodoSub = function(newTodo) {
		bookService.submit(newTodo).then(function(data){
			console.log(data)
		})
	}
	
	
}])



	



//
//	todoService.getTodos().then(function(todos){
//		$scope.todos = todos;
//	})
//
//
//
//	$scope.newTodo = {};
//
//	$scope.submission = function(newTodo) {
//		todoService.submit(newTodo).then(function(data){
//			console.log(data)
//		})
//	}
//
//
//	$scope.delete = function (index) {
//		var item = $scope.todos[index]
//		todoService.delete(item).then(function(data){
//		$scope.todos.splice(index, 1)
//		})
//		
//	}
//
//	$scope.edit = function (input){
//		todoService.edit(input).then(function(data){
//			console.log(data);
//		})
//	}
//
//}])

