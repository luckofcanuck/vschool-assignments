var readlineSync = require("readline-sync");

var userHealth = 100;
var userDamage = 50;
var weapons = ["Bow", "Sword", "Twig"];
var classes = ["Dwarf", "Elf", "Druid"];
var enemies = ["Alan", "Mage", "Tree"];
var itemsToFind = ["Heart", "Spyder", "Lover"];
var itemsToWin = ["Alan's Wife", "A Mages Staff", "Global Warming"];
var inventory = [];


var enemy = {
	name: "unknown",
	damage: "unknown",
	health: "unknown"
}





var userName = readlineSync.question("***goodde morrow, fayre travelre! wyth whomst do y presentley spaek?");

console.log("***" + userName + ", ys yt? What an odde lyddle naem. y wyll be thy guidde on thyne adventures.");







weaponIndex = readlineSync.keyInSelect(weapons, "wyth whych arms do ye wysh to defende yourselffe? y hav but only an arro, an knyfe, an' an wee lyddle wooden stick.");
var firstWeapon = weapons[weaponIndex];

if (firstWeapon == "Bow") {
    console.log("***aye the stryng and arro, an wyse decision travelre " + userName + ". Ye can nay deale graet damage, but maeybye ye wyll be of graetar wyt than thy oponents.")
} else if (firstWeapon == "Sword") {
    console.log("***aye the paeky knyfe, an boulde desision travelre " + userName + ". Ye can deale a wee bit moar damage, the paeky knyfe ye yield may sway favour yn battel.")
	userDamage = 53;
} else {
	console.log("***aye, an lyddle stick? an odde decision travelre " + userName + ". Somehowe, ye can deale graetar damage than y wulde expect, ye wulde be an graet foole if ye can nay be vyctorious.")
	userDamage = 60;
}





classIndex = readlineSync.keyInSelect(classes, "ye have taekn up arms to prepaer for battel. yt ys crucial that y now ask ye soemthing very unintrusyve an' nay offensyve nay won wee byt. why do ye looke so straenge? are ye an wee dwahrf? an pointy aelf? an fylthy drud?");
var userClass = classes[classIndex];

if (userClass == "Dwarf") {
	console.log("***yt ys alwaeys goude to have an haelfman by thy syde. thy haelth is graet. wylcoem aboarde, wee dwahrf.");
	userHealth = 120;
} else if (userClass == "Elf") {
	console.log("***aye an pointy aelf! y was of a mynd that thys was so. ye are of faire haelth, faire aelf.");
	userHealth = 110;
} else {
	console.log("***what an terryble race. ye are nay even bound to answer wyth truthe yet ye admyt to be an fylthy drud. thy haelth ys poore and thy decision ys poorere.")
	userHealth = 90;
}



console.log("***We caen begyn adventureing nowe yf ye wysh. ye may also enter 'i' any tyme when walkeing to cheque thy inventory, or 'h' for an updaet on thy haelth. thy goale yn thys gaem ys to survyve longe ynough to flae from the forrestte. ye wyll need to procure a few ytems yn thy ynventory to do thys. at least seven are needed. they can be found after defaetinge thy enemyes or by chance whilst walkeing. goode lucke!")

while(userHealth > 0){
	if (inventory.length > 6){
		break
	} else {
		walking();
	}
}






function walking() {
	if (inventory.length > 6){
		console.log("ye have defaeted all thy enemyes. the gaem has been wonne.")
	} else {
	console.log("Presse 'w' to walk.");
	key = readlineSync.keyIn("", {hideEchoBack: true, mask: '', limit: 'wih '});
		if (key === "w"){
			var possibleEncounter = Math.random();
			if (possibleEncounter < .29) {
				enemyGenerator();
			} else {
				walking();
			}
		} else if (key === "i"){
			console.log(inventory);
			walking();
		} else if (key === "h"){
			console.log(userHealth);
			walking();
		}
	}
};







function enemyGenerator() {
	var randomEnemy = Math.random ();
	if (randomEnemy < .29) {
		enemy.name = enemies[0];
		enemy.damage = 20;
		enemy.health = 51;
		console.log("aye nay. yt ys that moste pathetyc of soules. alan. y haete alan. plaese kyll hym. Press 'f' to fight or 'r' to run.");
		key = readlineSync.keyIn("", {hideEchoBack: true, mask: '', limit: 'fr '});
		if (key === "f"){
			fighting();
		} else if (key === "r"){
			running();
		} 
	} else if (randomEnemy < .59){
		enemy.name = enemies[2];
		enemy.damage = 5;
		enemy.health = 120;
		console.log("ye have beene walkeing too longe. yt ys tyme to practyce thy skylls on an trae. Press 'f' to fight or 'r' to run.");
		key = readlineSync.keyIn("", {hideEchoBack: true, mask: '', limit: 'fr '});
		if (key === "f"){
			fighting();
		} else if (key === "r"){
			running();
		}
	} else if (randomEnemy < .89){
		enemy.name = enemies[1];
		enemy.damage = 40;
		enemy.health = 120;
		console.log("aye nay!! yt ys an mage! Press 'f' to fight or 'r' to run.");
		key = readlineSync.keyIn("", {hideEchoBack: true, mask: '', limit: 'fr '});
		if (key === "f"){
			fighting();
		} else if (key === "r"){
			running();
		}
	} else {
		itemGenerator = Math.random();
		if (itemGenerator < .33) {
			inventory.push(itemsToFind[0]);
			console.log("ye have founde an 'eart. ye have gained haelth");
			userHealth = (userHealth + 30);
		} else if (itemGenerator < .66){
			inventory.push(itemsToFind[1]);
			console.log("ye have found an spyder. yt ys gross and useless but so are ye, so ye decyde to keep yt.");
		} else {
			inventory.push(itemsToFind[2]);
			console.log("ye have found an lover yn the forrestte. ye finally have an wee reason to fight for lyfe. thy attacks have growne graetar.");
			userDamage = (userDamage + 8);
		}
	}
}






function fighting() {
	while(enemy.health > 0 && userHealth > 0){
		var userAttackPower = Math.floor(Math.random() * (userDamage - 10) + (userDamage - 10));
		enemy.health = (enemy.health - userAttackPower);
		console.log("Ye have attacked " + enemy.name + " only " + enemy.health + " of thy enemyes' haelth remaens.");
		var enemyAttackPower = Math.floor(Math.random() * (enemy.damage - 5) + (enemy.damage - 5));
		userHealth = (userHealth - enemyAttackPower);
		console.log("aye nay.. ye have been attackedde and only " + userHealth + " of thy haelth remaens..")
	} if (userHealth <= 0){
		console.log("ye have died, yt ys pathetyc.")
	} else if (enemy.health <= 0) {
		userHealth = (userHealth + 5);
		if (enemy.name == "Alan"){
			var itemWon = itemsToWin[0];
			console.log("ye have triumphed over alan, ye have gained hys wyfe and more reasons to lyve, thy haelth incraeses.");
		} else if (enemy.name == "Mage"){
			var itemWon = itemsToWin[1];
			console.log("ye have triumphed over an mage, ye taek up hys staff, thy haelth and damage incraeses.");
			userDamage = (userDamage + 5);
		} else {
			var itemWon = itemsToWin[2];
			console.log("ye have triumped over an trae, ye have doomed mankind and begun the processe of globael warmeing, but thy haelth has incraesed.")
		}
		inventory.push(itemWon);
		walking();
	}
}




function running() {
	var runningChance = Math.random();
	if (runningChance > .5){
		console.log("ye have run away lyke the cowarde ye be.")
		walking();
	} else {
		console.log("ye are nay very quicke. ye dyd nay maek yt very far.");
		var enemyAttackPower = Math.floor(Math.random() * (enemy.damage - 5) + (enemy.damage - 5));
		userHealth = (userHealth - enemyAttackPower);
		console.log("aye nay.. ye have been attackedde and only " + userHealth + " of thy haelth remaens..")
		if (userHealth <= 0){
			console.log("ye have died, yt ys pathetyc.")
		} else {
		fighting();
		}
	}
};
	
