$("#post").click(function(){
	var newTitle = $("#title").val();
	var newDescription = $("#description").val();
	var newPrice = $("#price").val();
	
	if(document.getElementById("checked").checked){
		var newComplete = true;
	} else {
		var newComplete = false;
	}
	var newImgUrl = $("#imgUrl").val();
	var newTodo = {
		title: newTitle,
		description: newDescription,
		price: newPrice,
		completed: newComplete,
		imgUrl: newImgUrl
	}
	$.post("http://api.vschool.io/tim/todo/", newTodo, function(data){
		console.log("gotit");
	});
});

$("#get").click(function(){
	$.get("http://api.vschool.io/tim/todo/", function(data){
		for (var i = 0; i < data.length; i++) {
			$(".result").append(data);
		}
	});
});

