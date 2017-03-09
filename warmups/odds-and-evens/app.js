//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.
//code here


var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 34, 35, 19]


var oddsAndEvens = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
}

oddsAndEvens(nums);
console.log(evens);
console.log(odds);



//starts at index zero, and goes until it fills nums.length (i.e. for the whole array) and as long as it is within those two indexes (0, and the last) it counts up by one index for each loop. then does the if, else code within the function.