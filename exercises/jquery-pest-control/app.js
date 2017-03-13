
$("#goombabutton").click(function() {
	var goombaNum = $("#goomba-amount").val();
	var goombaTotal = (goombaNum * 5);
	$("#goombaEntry").append(goombaTotal);
})



$("#bobbutton").click(function() {
	var bobNum = $("#bob-omb-amount").val();
	var bobTotal = (bobNum * 7);
	$("#bobEntry").append(bobTotal);
})

$("#cheepbutton").click(function() {
	var cheepNum = $("#cheep-cheep-amount").val();
	var cheepTotal = (cheepNum * 11);
	$("#cheepEntry").append(cheepTotal);
})

$("#finalhaul").click(function() {
	var cheepNum = $("#cheep-cheep-amount").val();
	var cheepTotal = (cheepNum * 11);
	var bobNum = $("#bob-omb-amount").val();
	var bobTotal = (bobNum * 7);
	var goombaNum = $("#goomba-amount").val();
	var goombaTotal = (goombaNum * 5);
	var totalTotal = (cheepTotal + bobTotal + goombaTotal);
	$("#total-total").append(totalTotal);
})



var sounds = $("#coinsound")[0];

$("#cheepbutton, #finalhaul, #bobbutton, #goombabutton").click(function() {
	sounds.play();
});





$("#nightorday").click(function() {
	$("button").toggleClass("darkbutton");
	$("h1").toggleClass("darktext");
	$("input").toggleClass("darkinput");
	$("*").toggleClass("darkbody");
	$("html").toggleClass("darkbackground");
})

$("#nightorday").click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('Day Viewing');         
    } else {
        $this.text('Night Viewing');
    }
});