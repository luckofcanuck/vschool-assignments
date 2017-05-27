function functionOne(str) {
    for (i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
};

functionOne("lettersgohere");





/*function functionTwo(str, character) {
    for (i = 0; i < str.length; i++) {
        if ([i] === character) {
            console.log(str[character]);
        } else {
            console.log("42 is not here.");
        }
    }
};

functionTwo("apples", "p");*/


function functionTwo(str, character){
    for (i = 0; i < str.length; i++){
        if (str[i] === character){
            return i;
        }
    }
    return "There was no" + character + "found.";
};

console.log(functionTwo("apples", "l"));






var arrayOne = [12, 324, 9, 8, 42, 4, 5];

function functionThree(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === 42) return;
    }
    return "42 is not here.";
}

console.log(functionThree(arrayOne));





var arrayTwo = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var smallest = arrayTwo[0];

function functionFour(array) {
    for (i = 0; i < array.length; i++){
        if(array[i]<smallest){
            smallest=array[i];
        }
    }
    console.log(smallest);
};

console.log(functionFour(arrayTwo));