var readlineSync = require("readline-sync");

var operations = ["Addition", "Multiplication", "Division", "Subtraction"]

var num1 = readlineSync.question("Please enter your first number.");
var num2 = readlineSync.question("Please enter your second number.");
var operationIndex = readlineSync.keyInSelect(operations, "Please enter the operation you wish to perform.");
var operation = operations[operationIndex];



if (operation == "Addition") {
	console.log(parseInt(num1) + parseInt(num2));
} else if (operation == "Multiplication"){
	console.log(parseInt(num1) * parseInt(num2));
} else if (operation == "Division"){
	console.log(parseInt(num1) % parseInt(num2));
} else if (operation == "Subtraction"){
	console.log(parseInt(num1) - parseInt(num2));
}


