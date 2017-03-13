var newString = [];


function antiCaps (str) {
	for (var i = 0; i < str.length; i++){
		if (str[i] === str[i].toUpperCase()){
			newString.push(str[i].toLowerCase());
		} 
		if (str[i] === str[i].toLowerCase()){
			newString.push(str[i].toUpperCase());
		}
	}
}


antiCaps("HoWdY");
antiCaps("WWWHhooo are YOU");
antiCaps("WHO");
antiCaps("who");





var result = newString.join("");
console.log(result);