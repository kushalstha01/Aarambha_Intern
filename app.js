const burgerMenu = document.getElementsByClassName('burger-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
