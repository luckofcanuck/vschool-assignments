var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/home", {
			controller: "aboutController",
			templateUrl: "home/home.html"
		})
		.when("/contact", {
			controller: "loveController",
			templateUrl: "contact/contact.html"
		})
		.when("/blog", {
			controller: "homeController",
			templateUrl: "blog/blog.html"
		})
}]);

app.service("bookService", function ($http) {

	this.author = "";

	this.getAuthor = function (userAuthor) {
		return $http.get("http://openlibrary.org/search.json?author=" + userAuthor).then(function (response) {

			var authorInfo = [];
			var preAuthorInfo = [];
			

			var otherBooks = response.data.docs;

			for (var i = 0; i < otherBooks.length; i++) {
				function loweredSub(input) {
					if (input) {
						return input.toLowerCase();
					}
				}
				var bookObject = {
					title: otherBooks[i].title.toLowerCase(),
					subtitle: loweredSub(otherBooks[i].subtitle),
					isbn: otherBooks[i].isbn
				}
				preAuthorInfo.push(bookObject);
			}

			for (var i = 0; i < preAuthorInfo.length; i++) {
				var isUnique = true
				var authorObject = {
				title: "",
				subtitle: "",
				isbn: "",
				}
				for (var j = 0; j < authorInfo.length; j++) {
					if (preAuthorInfo[i].title === authorInfo[j].title && preAuthorInfo[i].subtitle === authorInfo[j].subtitle) {
						isUnique = false
					}
				}
				
				if (isUnique) {
					authorObject.title = preAuthorInfo[i].title;
					if (preAuthorInfo[i].isbn){
						authorObject.isbn = preAuthorInfo[i].isbn[0];
					} else {
						console.log("ok")
					}
					if (preAuthorInfo[i].subtitle){
						authorObject.subtitle = preAuthorInfo[i].subtitle;
					} else {
						authorObject.subtitle = undefined;
					}
					authorInfo.push(authorObject);
				}
			}
			return authorInfo;
		})
	}
	
	
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
	


})

app.filter("capitalize", function () {
	return function (input) {
		if (input === undefined) {

		} else {
			var returnedString = "";
			returnedString += input[0].toUpperCase();
			for (var i = 1; i < input.length; i++) {
				if (input[i] === " ") {
					returnedString += " " + input[i + 1].toUpperCase();
					i++
				} else if (input[i] === "(" || input[i] === "-") {
					returnedString += input[i] + input[i + 1].toUpperCase();
					i++
				} else {
					returnedString += input[i];
				}
			}
			return returnedString;
		}
	}
})