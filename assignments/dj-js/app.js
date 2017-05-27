document.getElementById("square").addEventListener("mouseover", function () {
    this.style.backgroundColor = "blue";
})



document.getElementById("square").addEventListener("mousedown", function () {
    this.style.backgroundColor = "red";
})

document.getElementById("square").addEventListener("mouseup", function () {
    this.style.backgroundColor = "yellow";
})

document.getElementById("square").addEventListener("dblclick", function () {
    this.style.backgroundColor = "green";
})

document.getElementById("square").addEventListener("mouseleave", function () {
    this.style.backgroundColor = "orange";
})

