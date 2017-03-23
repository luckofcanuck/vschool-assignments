var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function ($scope, $http) {

	$scope.toggle = false;

	$http.get("http://api.vschool.io/tim/todo")
		.then(function (response) {
			$scope.todos = response.data;
		})




	$scope.newTodo = {};

	$scope.submission = function () {
		$http.post("http://api.vschool.io/tim/todo/", $scope.newTodo)
			.then(function (response) {
				$scope.newTodo = {};
				$http.get("http://api.vschool.io/tim/todo")
					.then(function (response) {
						$scope.todos = response.data;
					})
			});
	}





	$scope.delete = function (index, item) {
		var item = $scope.todos[index]
		$http.delete("http://api.vschool.io/tim/todo/" + item._id);
		$scope.todos.splice(index, 1);
	}



}])