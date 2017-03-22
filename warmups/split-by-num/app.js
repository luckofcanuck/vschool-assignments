function splitNum(arr, num){
	var newArray = [];
	for (var i = 0; i < arr.length; i+=num){
		var smallArray = arr.slice(i, i+num);
		console.log(smallArray);
	}
}


splitNum([1, 2, 3, 4, 5, 6, 7, ], 5);
splitNum(["a", "b", "c", "d",], 1);
splitNum([12, 3, 4, 5, 2, 1, 4, 5, 2, 3, 1, 2, 4, 5, 6, 7, 4, 2, 3, 5], 3)



