function isPalindrome(str) {
	var newStr = str.replace(/[^a-z_]/gi,"").toLowerCase();
	var revStr = newStr.split("").reverse().join("");
	if (newStr == revStr) {
		return true;
	} else {
		return false;
	}
};

console.log(isPalindrome("Star Rats!")); 
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));