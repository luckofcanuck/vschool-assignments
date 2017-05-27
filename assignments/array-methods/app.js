var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(fruit);
console.log(vegetables);

var poppedVegetables = vegetables.pop();
console.log(poppedVegetables);
console.log(vegetables)

var splicedFruit = fruit.splice(0,1);
console.log(splicedFruit);
console.log(fruit);

console.log("orange index = " + fruit.indexOf("orange"));
fruit.push(1);
console.log(fruit);

console.log(vegetables.length);
vegetables.push(3);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var splicedFood = food.splice(4,2);
console.log(splicedFood);
console.log(food);

food.reverse();
console.log(food);

console.log(food.join(" - "));