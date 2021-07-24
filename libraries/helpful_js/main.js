// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
// console.log(h1, title);
let img = document.querySelector('#myImg');
title.innerHTML = 'New Title'

let count = 1;

function add1() {
    count++;
    console.log(count);
}

function swapImg() {
    img.src = "./yogitocat.png";
    // img.innerHTML = "./yogitocat.png";
    
}
// function setActive(element) {
//     element.style.backgroundColor = "#222222";
//     element.style.color = "#ffffff";
// }

// function setActive(element) {
//     element.classList.add("dark-mode");
// }
function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}