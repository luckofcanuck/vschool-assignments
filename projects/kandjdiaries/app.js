function changeClass(){
	if ($("#slideSpot").hasClass("firstSlide")){
		$("#slideSpot").removeClass("firstSlide", 500, "swing");
		$("#slideSpot").addClass("secondSlide", 500, "swing");
	} else if ($("#slideSpot").hasClass("secondSlide")){
		$("#slideSpot").removeClass("secondSlide");
		$("#slideSpot").addClass("thirdSlide", 500, "swing");
	} else if ($("#slideSpot").hasClass("thirdSlide")){
		$("#slideSpot").removeClass("thirdSlide");
		$("#slideSpot").addClass("fourthSlide", 500, "swing");
	} else {
		$("#slideSpot").removeClass("fourthSlide");
		$("#slideSpot").addClass("firstSlide", 500, "swing");
	}
}

setInterval(changeClass, 5000);



