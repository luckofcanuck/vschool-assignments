var readlineSync = require("readline-sync");

var string = readlineSync.question("What phrase would you like to encrypt?").toLowerCase();
var howFarRemoved = parseInt(readlineSync.question("How many letters would you like to shift?"));
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function caesarShift(string, howFarRemoved){
	var newString = "";
	for (var i = 0; i < string.length; i++){
		var char = string[i];
		var indexOfCharacter = alphabet.indexOf(char);
		var newPosition = indexOfCharacter + howFarRemoved;
		if (newPosition > 25){
			newPosition = newPosition - 26;
		}
		var newCharacter = alphabet[newPosition];
		if (indexOfCharacter === -1){
			var char = string[i];
			var newCharacter = char;
		}
		
		newString += newCharacter;
	}
	return newString;
}


console.log(caesarShift(string, howFarRemoved));
