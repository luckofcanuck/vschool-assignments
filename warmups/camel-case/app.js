var camelString = "Make this camel case my dude.";
var otherString = "or-do_this one?"

function camelify(str){
	var newStr = ""
	newStr += str[0].toLowerCase();
	for (var i = 1; i < str.length; i++){
		if (str[i] === " " || str[i] === "-" || str[i] === "_") {
			newStr += str[i + 1].toUpperCase();
			i++;
		} else {
			newStr += str[i]
		}
	}
	console.log(newStr);
}

camelify(camelString);
camelify(otherString);