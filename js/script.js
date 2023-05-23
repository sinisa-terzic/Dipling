///////////////////////////////////////////////////////////
// oprn dialog box library
const library = document.querySelector('.library');

const library_Close = document.querySelector('.library-header-close')
library_Close.addEventListener('click', () => {
    library.classList.add("translateX-100");
});

const library_Open = document.querySelector('.open-library')
library_Open.addEventListener('click', () => {
    library.classList.remove("translateX-100");
});

// oprn dialog box library
/* const library_Pdf1 = document.querySelector('.library-pdf1');

const library_Pdf_Close1 = document.querySelector('.library-pdf1')
library_Pdf_Close1.addEventListener('click', () => {
    library_Pdf1.classList.add("none");
    console.log("klik")
});

const library_Pdf_Open1 = document.querySelector('.link-pdf1')
library_Pdf_Open1.addEventListener('click', () => {
    library_Pdf1.classList.remove("none");
});

// 2
const library_Pdf2 = document.querySelector('.library-pdf2');

const library_Pdf_Close2 = document.querySelector('.library-pdf2')
library_Pdf_Close2.addEventListener('click', () => {
    library_Pdf2.classList.add("none");
    console.log("klik")
});

const library_Pdf_Open2 = document.querySelector('.link-pdf2')
library_Pdf_Open2.addEventListener('click', () => {
    library_Pdf2.classList.remove("none");
}); */


///////////////////////////////////////////////////////////
// Sticky navigation
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("headerBottom");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position. može se staviti i window.pageYOffset >= 1000 - na koliko piksela će se pojaviti
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}// JavaScript Document

///////////////////////////////////////////////////////////
// toggle hamburger menu button
const navToggle = document.querySelector(".toggle"),
    navSpanMiddle = document.querySelector(".toggle .middle")

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navSpanMiddle.classList.toggle("hide");
    // navNavigationBar.classList.toggle("show");
});

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

