var app = angular.module("myApp");

app.service("countService", function () {

	this.blueCount = 10;
	this.redCount = 10;

	this.redClicker = function () {
		this.redCount = ((this.redCount) + 1);
		this.blueCount = ((this.blueCount) - 1);
		if (this.blueCount === 0){
			this.redCount = 100;
			this.blueCount = 100;
			alert("Red Won!!!!!! play again.....");
		}
	}

	this.blueClicker = function () {
		this.redCount = ((this.redCount) - 1);
		this.blueCount = ((this.blueCount) + 1);
		if (this.redCount === 0){
			this.blueCount = 100;
			this.redCount = 100;
			alert("Blue Won!!!!!! play again.....")
		}
	}
})