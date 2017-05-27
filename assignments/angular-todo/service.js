var app = angular.module("myApp");

app.service("todoService", function ($http) {

	this.getTodos = function () {
		var todos = "";
		return $http.get("http://api.vschool.io/tim/todo")
			.then(function (response) {
				todos = response.data;
				return todos;
			})

	}


	this.submit = function(input) {
		return $http.post("http://api.vschool.io/tim/todo/", input)
			.then(function(response){
				input = {};
				return response.data;
			});


	}
	
	
	this.delete = function(item){
		return $http.delete("http://api.vschool.io/tim/todo/" + item._id)
		.then(function(response){
			return response.data
		})
	}

	this.edit = function(input){
		return $http.put("http://api.vschool.io/tim/todo/" + input._id, input)
	}


});