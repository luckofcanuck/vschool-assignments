var goombaTotal = 0;


function goombaReward () {
    var goombaCount = document.getElementById("goomba-amount");
    var goombaValue = parseInt(goombaCount.value);
    goombaTotal = (5 * goombaValue);
    
    var div = document.createElement("div");
    
    var txtNode = document.createTextNode(goombaTotal);
    
    div.appendChild(txtNode);
    
    var goombaEntry = document.getElementById("goombaEntry");
    
    goombaEntry.appendChild(div);
}




var bobTotal = 0;

function bobReward () {
    var bobCount = document.getElementById("bob-omb-amount");
    var bobValue = parseInt(bobCount.value)
    bobTotal = (7 * bobValue);
    
    var div = document.createElement("div");
    
    var txtNode = document.createTextNode(bobTotal);
    
    div.appendChild(txtNode);
    
    var bobEntry = document.getElementById("bobEntry");
    
    bobEntry.appendChild(div);
}



var cheepTotal = 0;

function cheepReward () {
    var cheepCount = document.getElementById("cheep-cheep-amount");
    var cheepValue = parseInt(cheepCount.value)
    cheepTotal = (11 * cheepValue);
    
    var div = document.createElement("div");
    
    var txtNode = document.createTextNode(cheepTotal);
    
    div.appendChild(txtNode);
    
    var cheepEntry = document.getElementById("cheepEntry");
    cheepEntry.appendChild(div);
}




function haulTotal () {
    var totalEntry = (cheepTotal + bobTotal + goombaTotal);
    
    var div = document.createElement("div");
    
    var txtNode = document.createTextNode(totalEntry);
    
    div.appendChild(txtNode);
    
    var haulEntry = document.getElementById("total-total");
    haulEntry.appendChild(div);
}