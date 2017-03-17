getIt();

$("#post").click(function(){
	var newTitle = $("#title").val();
	var newDescription = $("#description").val();
	var newPrice = $("#price").val();
	var newTodo = {
		title: newTitle,
		description: newDescription,
		price: newPrice,
	}
	$.post("http://api.vschool.io/tim/todo/", newTodo, function(data){
		console.log("gotit");
	});
	getIt();
});


function getIt(){
$.get("http://api.vschool.io/tim/todo", function(response){
	var todos = response; 
	for (var i = 0; i < todos.length; i++)    /* or response.length*/
	$(".todos").append("<li class='todolist'>" + 
					  "<h1 class='todotitle'>" + todos[i].title + "</h1>" +
					   "<h4 class ='todoinfo'>" + todos[i].description + "</h4>" +
					   "<h4 class ='todoinfo'>" + todos[i].price + "</h4>" + 
					   "<button type='button' id='completed'>Completed</button>" +
					   "<button type='button' id='delete'>Delete</button> </li>")
});
}



