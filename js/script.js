///////////////////////////////////////////////////////////
// oprn dialog box library
const library = document.querySelector('.library');

const library_Close = document.querySelector('.library-header-close')
library_Close.addEventListener('click', () => {
    library.classList.add("translateX-100");
});

const library_Open = document.querySelector('.open-library')
library_Open.addEventListener('mouseenter', () => {
    library.classList.remove("translateX-100");
});

// oprn dialog box library
const library_Pdf1 = document.querySelector('.library-pdf1');

const library_Pdf_Close1 = document.querySelector('.library-pdf1')
library_Pdf_Close1.addEventListener('click', () => {
    library_Pdf1.classList.add("none");
    console.log("klik")
});

const library_Pdf_Open1 = document.querySelector('.link-pdf1')
library_Pdf_Open1.addEventListener('mouseenter', () => {
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
});

