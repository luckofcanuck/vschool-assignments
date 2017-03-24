var animals = [
	{
		type: "dog",
		name: "Howard"
  },
	{
		type: "cat",
		name: "Thomas"
  },
	{
		type: "dog",
		name: "Bear"
  },
	{
		type: "dog",
		name: "Indy"
  },
	{
		type: "cat",
		name: "Ryker"
  }
]


function findDogs(arr) {
	var dogsArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].type === "dog") {
			dogsArr.push(arr[i]);
		}
	}
	return dogsArr;
}

console.log(findDogs(animals));