

$("#get-data").click(function (){
	$.get("http://api.vschool.io:6543/pokemon.json", function(result){
		for (var i = 0; i < result.objects[0].pokemon.length; i++) {
			var div = document.createElement("div");
			var txtNode = document.createTextNode(result.objects[0].pokemon[i].name);
			div.appendChild(txtNode);
			var newList = document.getElementById("listPlace");
			newList.appendChild(div);
		}
	})
});