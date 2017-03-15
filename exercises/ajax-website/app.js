$("#pushed").click(function(){
	var newTitle = $("#title").val();
	var newDescription = $("#description").val();
	var newPrice = $("#price").val();
	var newComplete = $("#completed").val();
	var newImgUrl = $("#imgUrl").val();
	var newTodo = {
		title: newTitle,
		description: newDescription,
		price: newPrice,
		completed: newComplete,
		imgUrl: newImgUrl
	}
	$.post("http://api.vschool.io/tim/todo/", newTodo, function(data){
		$(".result").append(data);
	});
});