function splitNum(arr, num){
	for (var i = 0; i < arr.length; i+=num){
		var smallArray = arr.slice(i, i + num);
		console.log(smallArray);
	}
}


splitNum([1, 2, 3, 4, 5, 6, 7, ], 5);
splitNum(["a", "b", "c", "d",], 1);
splitNum([12, 3, 4, 5, 2, 1, 4, 5, 2, 3, 1, 2, 4, 5, 6, 7, 4, 2, 3, 5], 3)



betterVersion = function (things, num) {
	var output = [];
	while (things.length) output.push(things.splice(0 , num))
	return output;
}

console.log(betterVersion(["a", "b", "c", "d", 3, 4, 5, 6, 7, 8, 9,], 3));