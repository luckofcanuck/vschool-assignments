var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArray = [];



function forception (arr1, arr2) {
    for (i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
        for (a = 0; a <arr2.length; a++){
            newArray.push(arr2[a]);
        }
    }
    console.log(newArray.join());
}

forception(people, alphabet);