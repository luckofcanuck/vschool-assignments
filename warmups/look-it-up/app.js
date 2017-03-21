//var dictionary = [];
//
//function Entry(word, definition){
//	this.Word = word;
//	this.Definition = definition;
//	this.printWord = function() {
//		console.log(this.Word + " " + this.Definition + ".");
//	}
//}
//
//var word1 = new Entry("Tree", "Thing made of wood.");
//
//word1.printWord();
//dictionary.push(word1);
//console.log(dictionary);
//
//
//var searchedWord = "Apple";
//
//function search(){
//	for (var i = 0; i < dictionary.length; i++){
//		if (dictionary[i].Word == searchedWord){
//			console.log(searchedWord + " is already in the dictionary. It's definition is: " + dictionary[i].Definition);
//		} else {
//			console.log("The word does not exist. Add a definition.")
//		}
//	}
//}
//
//search();


//or//////////////

var dictionary = {};

function addWord (word, definition){
word = word.toLowerCase();
dictionary[word] = definition;
}

addWord("dog", "an animal");

console.log(dictionary);

function search(word){
if(dictionary[word] == undefined){
console.log("This word is not in the dictionary yet.");
} else {
console.log(dictionary[word]);
}
}

console.log(search("cat"));
console.log(search("dog"));
