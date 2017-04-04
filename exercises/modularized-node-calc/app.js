var readline = require("readline-sync");
var add = require("./add");
var mult = require("./mult");
var sub = require("./sub");
var div = require("./div");
var exp = require("./exp");

var operations = ["multiply", "divide", "subtract", "add", "exponentiate"];

var operationsIndex = readline.keyInSelect(operations, "which operation would you like to perform?")

var operationPerformed = operations[operationsIndex];

var num1 = readline.questionInt("Which is the first number would you like to " + operationPerformed + " by/to/from?");
var num2 = readline.questionInt("which is the second number in your equation?");

console.log(calculator(num1, num2, operationPerformed));

function calculator(num1, num2, str){
	if (str === "multiply"){
		return mult(num1, num2);
	} else if (str === "divide"){
		return div(num1, num2);
	} else if (str === "subtract"){
		return sub.sub(num1, num2);
	} else if (str === "add"){
		return add(num1, num2);
	} else if (str === "exponentiate"){
		return exp.exp(num1, num2)
	}
}









//console.log(calculator(3, 4, "multiply"));
//console.log(calculator(20, 4, "divide"));
//console.log(calculator(8, 4, "subtract"));
//console.log(calculator(3, 4, "exponentiate"));
//console.log(calculator(3, 4, "add"));
