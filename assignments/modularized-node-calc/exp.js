var expAnswer = function (num1, num2){
	var numb = (num1);
	for (var i = 0; i < (num2-1); i++){
		numb = (numb * num1);
	}
	return numb;
}

function exp(num1, num2) {
	return expAnswer(num1, num2);
}

module.exports = {
	exp: exp
}