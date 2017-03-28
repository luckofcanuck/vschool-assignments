//Given an array of mixed types, return an object or array with 4 arrays of their own type
//example:


var input = ["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]];

function splitArr(input){
	
	var newObject = {
		strings: [],
		numbers: [],
		arrays: [],
		objects: []
	}
	
	for (var i = 0; i < input.length; i++){
		if (typeof input[i] === "string"){
			newObject.strings.push(input[i]);
		} else if (input[i] instanceof Array) {
			newObject.arrays.push(input[i]);
		} else if (typeof input[i] === "object"){
			newObject.objects.push(input[i]);
		} else if (typeof input[i] === "number"){
			newObject.numbers.push(input[i]);
		} 
	}
	
	console.log(newObject);
	
}

splitArr(input);