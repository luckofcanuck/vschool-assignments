var lowerNumber = function (numOne, numTwo) {
    if (numOne > numTwo) {
        console.log(numTwo);
    } else {
        console.log(numOne);
    }
};

lowerNumber(5,9);




var monkeyTrouble = function (aSmile, bSmile) {
    if (aSmile && bSmile) {
        return true;
    } else if (aSmile || bSmile) {
        return false;
    } else {
        return true;
    }
};

console.log(monkeyTrouble(true, true)); 
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));



var d = new Date();
var dGreet = d.getHours();

var greeting = function (d) {
    if (dGreet <= 12) {
        console.log("Good Morning");
    } else if (12 < dGreet <= 17) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
};

greeting();