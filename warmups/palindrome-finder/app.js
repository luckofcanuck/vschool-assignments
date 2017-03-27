function isPalindrome(str) {
	var charactersOnly = str.replace(/[^a-z_]/gi,"");
	var newStr = charactersOnly.toLowerCase();
	var revStr = charactersOnly.toLowerCase().split("").reverse().join("");
	if (newStr == revStr) {
		return true;
	} else {
		return false;
	}
};

console.log(isPalindrome("Star Rats!")); 
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));