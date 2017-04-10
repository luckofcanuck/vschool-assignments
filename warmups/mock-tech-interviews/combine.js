var people = [
	{
		name: "Jim",
		email: "jim@gmail.com",
		numFriends: 10
    },
	{
		name: "Jim",
		email: "jim@gmail.com",
		numFriends: 30
    },
	{
		name: "Jane",
		email: "jane@gmail.com",
		numFriends: 200
    }
]


function combineUsers(array) {
	for (i = 0; i < array.length-1; i++) {
		if (array[i].name === array[i + 1].name && array[i].email === array[i + 1].email) {
			array[i].numFriends = (array[i].numFriends + array[i + 1].numFriends);
			array.splice(i + 1, 1);
		}
	}
	return array;
}

console.log(combineUsers(people));

