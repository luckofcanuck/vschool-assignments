function fixTeen(n) {
	var n1 = 0;
	if (19 > n > 16) {
		n1 = 0
	} else if (n === 13 || n === 14) {
		n1 = 0
	} else {
		n1 = n
	}
}

function addInts(a, b, c){
	fixTeen(a);
	fixTeen(b);
	fixTeen(c);
	console.log(a + b + c);
}

addInts(1, 2, 3);
addInts(2, 13, 1);
addInts(2, 1, 14);
addInts(2, 15, 14);








