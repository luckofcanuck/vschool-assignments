var input = "bookkeeper larry";
var noDup = [];
var dup = [];

for(var i = 0; i < input.length; i++){
    if(noDup.indexOf(input[i]) === -1) {
        noDup.push(input[i]);
    } else {
        dup.push(input[i]);
    }
};

noDupStr = noDup.join();
dupStr = dup.join();

console.log(noDupStr);
console.log(dupStr);