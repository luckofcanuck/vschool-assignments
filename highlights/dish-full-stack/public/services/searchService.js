var app = angular.module("dishApp");

app.service("searchService", function ($http) {

	this.getAll = function (input) {
		var dishes = [];
		return $http.get("/dishes/?searchTerm=" + input)
			.then(function (response) {
				dishes = response.data;
				for (var i = 0; i < dishes.length; i++){
					if (dishes[i].vegetarian){
						dishes[i].vegetarian = "Vegetarian!";
					} else if (dishes[i].vegetarian === false){
						dishes[i].vegetarian = "";
					}
					if (dishes[i].glutenFree){
						dishes[i].glutenFree = "Gluten Free!";
					} else if (dishes[i].glutenFree === false){
						dishes[i].glutenFree = "";
					}
					if (dishes[i].nutFree){
						dishes[i].nutFree = "Nut Free!";
					} else if (dishes[i].nutFree === false){
						dishes[i].nutFree = "";
					}
					if (dishes[i].isAlcoholServed){
						dishes[i].isAlcoholServed = "Alcohol Available!";
					} else if (dishes[i].isAlcoholServed === false){
						dishes[i].isAlcoholServed = "";
					}
					if (dishes[i].isRestaurantChain){
						dishes[i].isRestaurantChain = "Chain Restaurant";
					} else if (dishes[i].isRestaurantChain === false){
						dishes[i].isRestaurantChain = "";
					}
				}
				dishes = dishes.sort(function (a, b){
					if(a.totalVotes > b.totalVotes) return -1;
					if(a.totalVotes < b.totalVotes) return +1;
				})
				return dishes;
			})
	}

})
