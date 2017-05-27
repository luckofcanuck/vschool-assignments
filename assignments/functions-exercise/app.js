function twoNumbers (num1, num2){
    console.log(num1 + num2);
}

twoNumbers(3, 5);





var threeNumbers = function(num1, num2, num3){
    if (num2 > num3 && num2 > num1) {
        return num2;
    } else if (num1 > num3 && num1 > num2){
        return num1;
    } else {
        return num3;
    }
}

console.log(threeNumbers(5, 9, 2));





function evenOrOdd (num){
    if (num % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

console.log(evenOrOdd(9));
console.log(evenOrOdd(6));




var halfOfString = [];
var string1 = "thisistwentycharacters"
var string2 = "thisisnot"

function doubleOrHalf (str){
    if (str.length < 20) {
        console.log(str.concat(str));
    } else {
        for (i = 0; i < str.length/2; i++) {
            halfOfString.push(str[i]);
        }
    console.log(halfOfString.toString());
    }
};


doubleOrHalf(string1);







