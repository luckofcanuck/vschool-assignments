var count = 0



if (sessionStorage.getItem("clicks")) {
	count = sessionStorage.getItem("clicks")
	$(".counter").html(sessionStorage.getItem("clicks"));
	$(document).click(function () {
		count++
		$(".counter").html(sessionStorage.getItem("clicks"));
		sessionStorage.setItem("clicks", count);
	})

} else {
	$(document).click(function () {
		count++;
		$(".counter").html(sessionStorage.getItem("clicks"));
		sessionStorage.setItem("clicks", count);
	})
};