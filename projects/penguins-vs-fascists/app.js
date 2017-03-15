var parties = [];
var firstAttacker = "";
var secondAttacker = "";
var partyAttacking = "";
var attacked = [];

if (firstAttacker == "Penguins"){
	attacked.push(parties[1]);
} else {
	attacked.push(parties[0]);
}

function Party(name, population) {
	this.Name = name;
	this.Population = population;
}

var penguins = new Party("Penguins", 1000000);
var fascists = new Party("Fascists", 1000000);

parties.push(penguins);
parties.push(fascists);

console.log("There are " + parties[0].Population + " " + parties[0].Name + " and " + parties[1].Population + " " + parties[1].Name + " to begin.");

function coinToss() {
	var coins = Math.random();
	if (coins < .5) {
		firstAttacker = parties[0].Name;
		secondAttacker = parties[1].Name;
	} else {
		secondAttacker = parties[0].Name;
		firstAttacker = parties[1].Name
	}
	console.log("The " + firstAttacker + " will attack first.")
	sendNuke(partyAttacking, onHit, onMiss);
}

coinToss();




function sendNuke(partyAttacking, onHit, onMiss) {
	partyAttacking = firstAttacker
	if (parties[0].Population > 0 && parties[1].Population > 0){
		var nukeHitchance = Math.random()
		if (nukeHitchance < .5) {
			onMiss(partyAttacking, onHit, onMiss);
		} else {
			onHit(partyAttacking, onHit, onMiss);
		}
	} else {
		if (parties[0].Population > parties[1].Population){
			console.log("The Penguins have dominated. Justice has been served.")
		} else {
			console.log("The evil Fascists have won. Penguins will not live to fight another day.")
		}
	}
}

function responseNuke(partyAttacking, onHit, onMiss) {
	partyAttacking = secondAttacker
	if (parties[0].Population > 0 && parties[1].Population > 0){
		var nukeHitchance = Math.random()
		if (nukeHitchance < .5) {
			onMiss(partyAttacking, onHit, onMiss);
		} else {
			onHit(partyAttacking, onHit, onMiss);
		}
	} else {
		if (parties[0].Population > parties[1].Population){
			console.log("The Penguins have dominated. Justice has been served.")
		} else {
			console.log("The evil Fascists have won. Penguins will not live to fight another day.")
		}
	}
}

function onMiss(partyAttacking, onHit, onMiss) {
	console.log("The " + partyAttacking + " have sent their nuke and missed.");
	if (partyAttacking == firstAttacker){
		responseNuke(partyAttacking, onHit, onMiss);
	} else {
		sendNuke(partyAttacking, onHit, onMiss);
	}
}


function onHit(partyAttacking, onHit, onMiss) {
	var damage = Math.floor(Math.random() * 100001) + 100000;
	if (partyAttacking == firstAttacker && firstAttacker == "Penguins") {
		parties[1].Population = (parties[1].Population - damage);
		console.log('The Penguins have hit. The Fascists only retain a population of ' + parties[1].Population);
		responseNuke(partyAttacking, onHit, onMiss);
	} else if (partyAttacking == firstAttacker && firstAttacker !== "Penguins"){
		parties[0].Population = (parties[0].Population - damage);
		console.log('The Fascists have hit. The Penguins only retain a population of ' + parties[0].Population);
		responseNuke(partyAttacking, onHit, onMiss);
	} else if (partyAttacking == secondAttacker && secondAttacker == "Penguins"){
		parties[1].Population = (parties[1].Population - damage);
		console.log('The Penguins have hit. The Fascists only retain a population of ' + parties[1].Population);
		sendNuke(partyAttacking, onHit, onMiss);
	} else {
		parties[0].Population = (parties[0].Population - damage);
		console.log('The Fascists have hit. The Penguins only retain a population of ' + parties[0].Population);
		sendNuke(partyAttacking, onHit, onMiss);
	}
}

