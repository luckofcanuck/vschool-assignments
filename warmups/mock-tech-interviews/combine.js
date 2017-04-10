var people = [
	{
		name: "Jim",
		email: "jim@gmail.com",
		numFriends: 10
    },
	{
		name: "Jane",
		email: "jane@gmail.com",
		numFriends: 200
    },
	{
		name: "Jim",
		email: "jim@gmail.com",
		numFriends: 30
    }
]


function combineUsers(array) {
	array = array.sort(function(a, b){
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
	})
	for (i = 0; i < array.length; i++) {
		if (array[i].name === array[i + 1].name && array[i].email === array[i + 1].email) {
			array[i].numFriends = (array[i].numFriends + array[i + 1].numFriends);
			array.splice(i + 1, 1);
		}
	} 
	return array;
}

console.log(combineUsers(people));

