var app = angular.module("myApp", []);

app.directive("myInfo", function(){
	return {
		template: "<span>Warren Buffett -- reach me at warren.buffet@gmail.com</span>"
		//or
		//templateUrl: info.html    would go to info.html and make that whole file the template
	}
})