var app = angular.module("dishApp");

app.service("putService", function ($http) {

this.editDish = function(dish){
    if (dish.vegetarian){
      dish.vegetarian = true;
    }
    if (dish.glutenFree){
      dish.glutenFree = true;
    }
    if (dish.nutFree){
      dish.nutFree = true;
    }
    if (dish.isAlcoholServed){
      dish.isAlcoholServed = true;
    }
    if (dish.isRestaurantChain){
      dish.isRestaurantChain = true;
    }
    console.log(dish);
  return $http.put("http://localhost:8000/dishes/" + dish._id, dish)
    .then(function(response){
      console.log(response);
    })
}

})
