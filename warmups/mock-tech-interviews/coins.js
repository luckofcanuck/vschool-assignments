//write a function that takes an array of coins as it’s first argument, and a string representing a coin as it’s second argument.
//
//Options for the strings in the array, and the the string representing a coin are restricted to the strings: “penny", “nickel", “dime", “quarter", "half dollar", and “dollar".
//
//This function will output how many of the second argument it would take to cover the total value of all of the coins in the array.
//
//Tests:
//
console.log(coverValue(["penny", "nickel", "dime"], "quarter")) 
console.log(coverValue(["penny", "nickel", "dime"], "nickel"))
console.log(coverValue(["penny", "nickel", "dime", "dime", "quarter"], "dime"))

function coverValue(arr, coin){
	var arrayTotal = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === "penny"){
			arr[i] = 1;
		} else if (arr[i] === "nickel"){
			arr[i] = 5;
		} else if (arr[i] === "dime"){
			arr[i] = 10;
		} else if (arr[i] === "quarter"){
			arr[i] = 25;
		}
		arrayTotal = arrayTotal + arr[i];
	}
	if (coin === "penny"){
			coin = 1;
		} else if (coin === "nickel"){
			coin = 5;
		} else if (coin === "dime"){
			coin = 10;
		} else if (coin === "quarter"){
			coin = 25;
		}
	return Math.ceil(arrayTotal/coin);
}




