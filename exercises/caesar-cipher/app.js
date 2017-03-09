var readlineSync = require("readline-sync");

var input = readlineSync.question("What phrase would you like to encrypt?").toLowerCase();
var shift = parseInt(readlineSync.question("How many letters would you like to shift?"));

var shiftedResponse = [];


for (var i = 0; i < input.length; i++){
	if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 90) {
		shiftedResponse.push(input.charAt(i));
	} else if (input.charCodeAt(i) > 77) {
		shiftedResponse.push(String.fromCharCode(input.charCodeAt(i) - shift));
	} else {
		shiftedResponse.push(String.fromCharCode(input.charCodeAt(i) + shift));
	}
}



console.log(shiftedResponse.join(""));


