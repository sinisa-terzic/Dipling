///////////////////////////////////////////////////////////
// remove loader
const body = document.querySelector("body"),
    loader = document.querySelector(".loader-wrap")

function fadeOutEffect() {
    const fadeEffect = setInterval(function () {
        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.4;
        } else {
            body.classList.remove('stop-scroll');
            loader.classList.add('remove');
            clearInterval(fadeEffect);
        }
    }, 100);
}
window.addEventListener("load", fadeOutEffect);


///////////////////////////////////////////////////////////
// Sticky navigation
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("headerBottom");
const logo1 = document.querySelector(".logo");
const logo2 = document.querySelector(".logo-sm");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position. može se staviti i window.pageYOffset >= 1000 - na koliko piksela će se pojaviti
function myFunction() {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky")
        logo1.classList.add("none");
        logo2.classList.remove("none");
    } else {
        navbar.classList.remove("sticky");
        logo1.classList.remove("none");
        logo2.classList.add("none");
    }
}


///////////////////////////////////////////////////////////
// Make mobile navigation work
const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".third");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)






