var enemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

function Enemy(type, hitPoints, defense) {
    this.type =  type;
    this.hitPoints = hitPoints;
    this.defense = defense;
}

var enemy = {
    types: "unknown",
    hitPoint: "unknown",
    defenses: "unknown",
}

var newEnemiesArray = [];
for (var i = 0; i < 100; i++) {
    typeGenerator();
    hitPointsGenerator();
    defenseGenerator();
    var newEnemy = new Enemy(enemy.types, enemy.hitPoint, enemy.defenses);
    newEnemiesArray.push(newEnemy);
}


function typeGenerator() {
    var typeNumber = Math.random();
    if (typeNumber < .33) {
        enemy.types = enemies[0];
    } else if (.66 > typeNumber > .33 ) {  
        enemy.types = enemies[1];
    } else {
        enemy.types = enemies[2];
    }
    return (enemy.types);
}


function hitPointsGenerator () {
    if (enemy.types == "Ancient Dragon") {
        enemy.hitPoint = Math.floor(Math.random() * 21) + 80;
    } else if (enemy.types == "Prowler") {
        enemy.hitPoint = Math.floor(Math.random() * 30) + 50;
    } else {
        enemy.hitPoint = Math.floor(Math.random() * 30) + 20; 
    }
    return (enemy.hitPoint);
} 


function defenseGenerator () {
    enemy.defenses = (enemy.hitPoint * 3);
    return (enemy.defenses);
}


console.log(newEnemiesArray);
console.log(newEnemiesArray.length);

