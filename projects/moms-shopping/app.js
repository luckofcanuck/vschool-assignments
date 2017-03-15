$("#submit").click(function(){
	var addedItem = $("#newItem").val();
	$("#list").append("<li><button class='xbutton'>x</button>" + addedItem + "</li>");
	
	$(".xbutton").on("click", function(){
	$(this).parent().remove();
})
})


