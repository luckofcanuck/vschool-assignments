var app = angular.module("dishApp");

app.service("postService", function ($http) {

this.submitNew = function (input) {
  var currentString = "";
  var biggerArr = [];
  if (input.otherDishIngredients) {
    for (var i = 0; i < input.otherDishIngredients.length; i++) {
      if (input.otherDishIngredients[i] === " ") {
        biggerArr.push(currentString);
        currentString = "";
      } else {
        currentString += input.otherDishIngredients[i];
      }
    }
    biggerArr.push(currentString);
    input.otherDishIngredients = biggerArr;
    currentString = "";
    biggerArr = [];
  }
  if (input.sidesToDish) {
    for (var i = 0; i < input.sidesToDish.length; i++) {
      if (input.sidesToDish[i] === " ") {
        biggerArr.push(currentString);
        currentString = "";
      } else {
        currentString += input.sidesToDish[i];
      }
    }
    biggerArr.push(currentString);
    input.sidesToDish = biggerArr;
  }
  input.totalVotes = 0;
  input.flaggedForRevision = false;
  return $http.post("http://localhost:8000/dishes/", input)
    .then(function(response){
    return response.data;
  })
}

})
