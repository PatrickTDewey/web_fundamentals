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


document.body.addEventListener('load', function(event) {
    console.log('Page Loaded');
    console.log(event);
})
