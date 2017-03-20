var statuses = ["Powered Up", "Big", "Small", "Dead"];


var player = {
	name: "",
	totalCoins: 0,
	status: statuses[0],
	star: false,
	setName: function (namePicked) {
		var namePicked = Math.random();
		if (namePicked > .5) {
			player.name = "Mario";
		} else {
			player.name = "Luigi";
		}
	},
	gotHit: function () {
		if (player.status == statuses[0]) {
			player.status = statuses[1];
			player.star = false;
		} else if (player.status == statuses[1]) {
			player.status = statuses[2];
			player.star = false;
		} else {
			player.status = statuses[3];
			player.star = false;
		}
	},
	gotPowerup: function () {
		if (player.status == statuses[3]) {
			player.status = statuses[2];
			player.star = false;
		} else if (player.status == statuses[2]) {
			player.status = statuses[1];
			player.star = false;
		} else if (player.status == 1) {
			player.status = statuses[0];
			player.star = false;
		} else {
			player.star = true;
		}
	},
	gameActive: function () {
		if (status == statuses[3]) {
			gameActive = false;
		} else {
			gameActive = true;
		}
	},
	addCoin: function () {
		totalCoins = (player.totalCoins++);
	},
	print: function () {
		if (player.star == false) {
			console.log("Name: " + player.name + ". Coins: " + player.totalCoins + ". Status: " + player.status + ". No star is active.");
		} else {
			console.log("Name: " + player.name + ". Coins: " + player.totalCoins + ". Status: " + player.status + ". You have a star!");
		}
	}
};


var playAGame = function () {
	player.setName();
	playing();
	function playing() {
		if (player.status !== statuses[3]) {
			if (Math.floor(Math.random() * 3) === 0) {
				player.gotHit();
				console.log("You got hit!");
			} else if (Math.floor(Math.random() * 3) === 1) {
				player.gotPowerup();
				console.log("You got a Powerup!");
			} else {
				player.addCoin();
				console.log("You got a coin!");
			}
			player.print();
			playing();
		} else {
			console.log("bublumboombahdoodoodoodadoomp. you died.");
		}
	}
}

playAGame();