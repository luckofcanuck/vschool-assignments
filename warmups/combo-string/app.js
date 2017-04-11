// Given 2 strings, a and b, return a string of the form short+long+short, with
// the shorter string on the outside and the longer string on the inside. The
// strings will not be the same length, but they may be empty (length 0).

var comboString=function(a, b) { 
	var longerString = "";
  	var shorterString = "";
  	if (a.length > b.length){
      longerString = a;
      shorterString = b;
    } else {
      longerString = b;
      shorterString = a;
    }
  return (shorterString + longerString + shorterString);
}


console.log(comboString("string", "otherstring"));
console.log(comboString("aa", "other"));
console.log(comboString("str", "thislongthing"));
console.log(comboString("nopenopenopenope", "ok"));