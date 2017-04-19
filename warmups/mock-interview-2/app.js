// function makeArrayOfObjects(arr1, arr2, str1, str2){
//   var finArr = [];
//
//   for (var i = 0; i < arr1.length; i++) {
//     var obj = {}
//     obj[str1] = arr1[i];
//     obj[str2] = arr2[i];
//     finArr.push(obj);
//   }
//   return finArr;
// }
//
// console.log(makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"], "age", "name"));


function makeArrayFromObject(obj){
  var final = [];
  for (var key in obj){
    final.push(obj[key]);
  }
  return final;

}

console.log(makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"} ));
