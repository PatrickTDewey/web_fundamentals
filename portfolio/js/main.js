// Mobile Menu Javascript
const mobileMenu = document.querySelector('.right-mobile-icon');

mobileMenu.addEventListener('click', function(event){
    let links = document.querySelector('#mobile-nav');
    if (links.classList.contains('display-none')) {
        links.classList.remove('display-none')        
        links.classList.add('animate')        
    } else {
        links.classList.add('display-none')
    }
    console.log(event);
});

// Typewriting function
let text = "No manual entry for Patrick"
let i = 0;
// typed.addEventListener('o')
// function typeWriter() {
//     for (let index = 0; index < text.length; index++) {
        
//         setTimeout(typeWriter, 50)
        
//     }
// }
window.addEventListener('DOMContentLoaded', function typeWriter(){
    console.log('DOM fully loaded and parsed');
    if (i < text.length) {
        console.log(text[i]);
        document.querySelector('.typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
});