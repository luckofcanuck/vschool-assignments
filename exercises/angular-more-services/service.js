var app = angular.module("myApp");

app.service("cartoonService", function () {


	this.cartoons = [];

	this.newCartoon = {
		title: '',
		description: '',
		image: ''
	};

	this.submission = function (cartoon) {

		this.newCartoon.title = cartoon.title;
		this.newCartoon.description = cartoon.description;
		this.newCartoon.image = cartoon.image;

		this.cartoons.push(this.newCartoon);
		console.log(this.cartoons)

		this.newCartoon = {
			title: '',
			description: '',
			image: ''
		}
	}
});