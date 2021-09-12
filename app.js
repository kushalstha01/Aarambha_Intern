//active class //
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.actNav').classList.remove('actNav');

        el.classList.add('actNav');
    });
});


// Carosel 
var carouselIndex = 1;
carousel(carouselIndex);

function plusCarousel(n) {
    carousel(carouselIndex += n);
}

function currentCarousel (n) {
    carousel(carouselIndex = n);
}

function carousel(n) {
    var i;
    var slides = document.getElementsByClassName("carousel");
    var dot = document.getElementsByClassName("dot");
    if (n > slides.length) {carouselIndex = 1}    
    if (n < 1) {carouselIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" activeCarousel", "");
    }
    slides[carouselIndex-1].style.display = "block";  
    dot[carouselIndex-1].className += " activeCarousel";
}

// burger menu //
const burgerMenu = document.getElementsByClassName('burger-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
