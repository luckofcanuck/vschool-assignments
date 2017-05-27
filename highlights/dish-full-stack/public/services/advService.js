var app = angular.module("dishApp");

app.service("advService", function($http){
	this.advSearch = function(input){
		var dishes = [];
		if (input.Name){
			var name = ("dishName=" + input.Name + "&");
		} else {
			var name = "";
		}
		if (input.Restaurant){
			var restaurant = ("dishRestaurant=" + input.Restaurant + "&");
		} else {
			var restaurant = "";
		}
		if (input.City){
			var city = ("cityOfRestaurant=" + input.City + "&");
		} else {
			var city = "";
		}
		if (input.Main){
			var main = ("mainDishIngredient=" + input.Main + "&");
		} else {
			var main = "";
		}
		if (input.Country){
			var country = ("countryOfFoodOrigin=" + input.Country + "&");
		} else {
			var country = "";
		}
		if (input.Light){
			var light = ("lightness=" + input.Light + "&");
		} else {
			var light = "";
		}
		if (input.Price){
			var price = ("price=" + input.Price + "&");
		} else {
			var price = "";
		}
		if (input.Veg){
			var veg = ("vegetarian=" + input.Veg + "&");
		} else {
			var veg = "";
		}
		if (input.Gluten){
			var gluten = ("glutenFree=" + input.Gluten + "&");
		} else {
			var gluten = "";
		}
		if (input.Nut){
			var nut = ("nutFree=" + input.Nut + "&");
		} else {
			var nut = "";
		}
		if (input.Chain){
			var chain = ("isRestaurantChain=" + input.Chain + "&");
		} else {
			var chain = "";
		}
		if (input.Alcohol){
			var alcohol = ("isAlcoholServed=" + input.Alcohol + "&");
		} else {
			var alcohol = "";
		}
		console.log(name + restaurant + chain);
		return $http.get("/dishes/advanced?" + name + restaurant + city + main + country + light + veg + gluten + price + nut + chain + alcohol)
			.then(function(response){
			dishes = response.data;
			if (input.Cal){
				for(var i = 0; i < dishes.length; i++){
					if (dishes[i].calories > input.Cal){
						dishes.splice(i, 1);
					}
				}
			}
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
