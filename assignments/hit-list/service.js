var app = angular.module("myApp");

app.service("serviceService", function ($http) {

	this.getStuff = function(){  
		var hits = "";
		return $http.get("http://api.vschool.io:6543/hitlist.json")
			.then(function(response){
			hits = response.data;
			
			return hits
		})
	}
});