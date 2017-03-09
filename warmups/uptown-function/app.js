var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printLyrics(array) {
    console.log(array.join(" "));
}

console.log(printLyrics(lyrics));



function reverseLyrics(array) {
    (array.reverse());
    console.log(array.join(" "));
}

console.log(reverseLyrics(lyrics));



function everyOther(array) {
    for (i = 0; i < array.length; i++)
        if (i % 2 === 0) {
            console.log(array[i])
        }
}

console.log(everyOther(lyrics));



/*function everyOtherReverse(array) {
    for (i = 0; i < array.length; i++)
        if (i % 2 === 0) {
            console.log(array[i]);
            (array.reverse());
            console.log(array[i]);
            (array.reverse());
            
        }
}

console.log(everyOtherReverse(lyrics));*/