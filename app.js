//active class //
var header = document.getElementById("active-nav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Dropdown
function myDropdownFun() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-ctn");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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
