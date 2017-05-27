getIt();

var todos = [];


$("#post").click(function () {
	var newTodo = [];
	var newTitle = $("#title").val();
	var newDescription = $("#description").val();
	var newPrice = $("#price").val();
	var newImg = $("#url").val();
	var newTodo = {
		title: newTitle,
		description: newDescription,
		price: newPrice,
		imgUrl: newImg,
	}
	$.post("http://api.vschool.io/tim/todo/", newTodo, function (newTodo) {
		console.log("gotit");
	});
	todos.push(newTodo);
	getIt();
	deleteEvent();
});


function getIt() {
	$.get("http://api.vschool.io/tim/todo/", function(newTodo) {
			for (var i = 0; i < newTodo.length; i++){
				$(".todos").append("<li class='todolist' data-item-id = " + newTodo[i]._id + ">" +
					"<h1 class='todotitle'>" + newTodo[i].title + "</h1>" +
					"<h4 class ='todoinfo'>" + newTodo[i].description + "</h4>" +
					"<h4 class ='todoinfo'>" + newTodo[i].price + "</h4>" +
					"<img src='" + newTodo[i].imgUrl + "'>" +
					"<button type='button' id='completed'>Completed</button>" +
					"<button type='button' class='delete'>Delete</button> </li>")
			};
			todos.push(newTodo);
			deleteEvent();
		});
	}



	function deleteEvent() {

		$(".delete").click(function () {
			var _id = $(this).parent().attr("data-item-id");
			console.log($(this).parent());
			var deleteObject = {
				type: "DELETE",
				url: "http://api.vschool.io/tim/todo/" + _id,
				success: function (response) {
					console.log(response);
				}
			};

			$.ajax(deleteObject);


			$(this).parent().remove();
		})
	}