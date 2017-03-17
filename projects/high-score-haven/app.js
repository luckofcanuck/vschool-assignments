var newName = "";
var newGame = "";
var newScore = "";
var newDate = "";
var newMessage = "";

$("#submit").click(function(){
	newName = $("#playername").val();
	newGame = $("#gamename").val();
	newScore = $("#score").val();
	newDate = $("#date").val();
	
	if(document.getElementById("isit").checked){
		var whatMessage = Math.random()
		if (whatMessage < .2){
			newMessage = "Your father smelt of elderberries.";
		} else if (.2 <= whatMessage < .4) {
			newMessage = "Your mother was a hamster.";
		} else if (.4 <= whatMessage < .6) {
			newMessage = "Where is my competition? I can't find any.";
		} else if (.6 <= whatMessage < .8) {
			newMessage = "I may not be creative enough to come up with my own message, but I'm better than you at this game.";
		} else {
			newMessage = "Whodat talking bout beatin my score?"
		}
	} else {
		newMessage = $("#message").val();
}
	
	$("#datatable tr:last").after("<tr><td>" + newName + "</td><td>" + newGame + "</td><td>" + newScore + "</td><td>" + newDate + "</td><td>" + newMessage + "</td></tr>");
});