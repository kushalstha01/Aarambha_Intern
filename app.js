//active class //
// const currentLoaction = location.href;
// const menuItem = document.querySelectorAll("a");
// const menuLength = menuItem.length

// for (let i=0; i<menuLength; i++) {
//     if (menuItem[i].href === currentLoaction) {
//         menuItem[i].className = "active"
//     }
// }
// const navActive = document.querySelector("navbar").querySelectorAll("a");

// navActive.forEach(element => {
//     element.addEventListener('click', function() {
//         navActive.forEach(nav=>nav.classList.remove("active"))

//         this.classList.add("active");
//     })
// })

// burger menu //
const burgerMenu = document.getElementsByClassName('burger-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
