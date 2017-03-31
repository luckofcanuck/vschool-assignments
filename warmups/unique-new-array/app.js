function findUniques(a, b){
	var bothArr = a.concat(b).sort();
	var theArray = [];
	for (var i = 0; i < bothArr.length; i++){
		if (bothArr[i] !== bothArr[i + 1] && bothArr[i] !== bothArr[i -1]){
				theArray.push(bothArr[i])
		} 
	}
	return theArray;
}





console.log(findUniques([1, 2, 5], [1, 2, 9, 8, 10]));  // [5, 8, 9, 10]  