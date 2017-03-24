function splitNum(arr, num){
	var arrTwo = [];
	for (var i = 0; i < arr.length; i+=num){
		arrTwo.push(arr.slice(i, i + num));
	}
	return arrTwo;
}


console.log(splitNum([1, 2, 3, 4, 5, 6, 7, ], 3));