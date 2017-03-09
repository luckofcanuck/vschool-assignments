var here = document.getElementById("here");

here.onclick = function () {
    var answer = prompt("Pick a number between 1 and 10");
    if (answer == 7) {
        alert("Carry on.");
    } else {
        prompt("wrong.");
    }
}

var myImage = document.getElementById("image");

var imageArray = ["https://tinyurl.com/zg4dl3x", "https://tinyurl.com/z6qlaj7", "https://tinyurl.com/gmao2xy", "https://tinyurl.com/zmo2nka"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 5000);


var myArray = ["apple", "banana", "strings"]
for (var i = 0; i < myArray.length; i++) {
    document.write(myArray[i] + "<br>")
}