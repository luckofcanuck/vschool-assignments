function addFunction() {
    var numOne= document.getElementById("addNumOne");
    var numOneValue = parseInt(numOne.value) 
    var numTwo = document.getElementById("addNumTwo");
    var numTwoValue = parseInt(numTwo.value)
    var responseValue = (numOneValue + numTwoValue);
    
    var p = document.createElement("p");

    var txtNode = document.createTextNode(responseValue);
    
    p.appendChild(txtNode);
    
    var additionResponse = document.getElementById("additionResponse");
    additionResponse.appendChild(p);
}





function subFunction() {
    var subOne = document.getElementById("subOne");
    var subOneValue = parseInt(subOne.value)
    var subTwo = document.getElementById("subTwo");
    var subTwoValue = parseInt(subTwo.value)
    var subResponseValue = (subOneValue - subTwoValue);
    
    var p = document.createElement("p");
    
    var txtNode = document.createTextNode(subResponseValue);
    
    p.appendChild(txtNode);
    
    var subResponse = document.getElementById("subtractionResponse");
    subResponse.appendChild(p);
}






function multFunction() {
    var multOne = document.getElementById("multOne");
    var multOneValue = parseInt(multOne.value)
    var multTwo = document.getElementById("multTwo");
    var multTwoValue = parseInt(multTwo.value)
    var multResponseValue = (multOneValue * multTwoValue);
    
    var p = document.createElement("p");

    var txtNode = document.createTextNode(multResponseValue);
    
    p.appendChild(txtNode);
    
    var multResponse = document.getElementById("multResponse");
    multResponse.appendChild(p);
}

