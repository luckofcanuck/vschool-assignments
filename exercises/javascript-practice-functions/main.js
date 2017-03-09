function helloClass () {
    console.log("hello, class");
};

helloClass();

function doubleNumber (firstNumber) {
    return(firstNumber * 2);
};

doubleNumber (4);

function favColor (colorAnswer) {
    if (colorAnswer === "blue") { 
        return("That's my favorite color too!")
    }
        
    else  { 
        return("What a lame color.")
    }
}

favColor("red");