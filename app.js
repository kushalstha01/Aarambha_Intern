//active class //
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.actNav').classList.remove('actNav');

        el.classList.add('actNav');
    });
});


// burger menu //
const burgerMenu = document.getElementsByClassName('burger-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
