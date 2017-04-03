console.log(withoutEnd('as;dfnqo3in'));
console.log(withoutEnd(''));
console.log(withoutEnd('abbbbbbbba'));
console.log(withoutEnd('ank2a sd 34s '));

function withoutEnd(str){
	var returnedStr = "";
	for(var i = 1; i < (str.length - 1); i++){
		returnedStr += (str[i]);
	}
	return returnedStr;
}