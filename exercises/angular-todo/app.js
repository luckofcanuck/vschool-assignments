var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "todoService", function ($scope, todoService) {

	$scope.toggle = false;

	todoService.getTodos().then(function(todos){
		$scope.todos = todos;
	})



	$scope.newTodo = {};

	$scope.submission = function(newTodo) {
		todoService.submit(newTodo).then(function(data){
			console.log(data)
		})
	}


	$scope.delete = function (index) {
		var item = $scope.todos[index]
		todoService.delete(item).then(function(data){
		$scope.todos.splice(index, 1)
		})
		
	}

	$scope.edit = function (input){
		todoService.edit(input).then(function(data){
			console.log(data);
		})
	}

}])