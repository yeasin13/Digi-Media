'use strict'
// add event on multiple elements

const addEventOnElement = function (elements, eventType, callback) {
    for (let i=0, len =elements.length; i<len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

// Navbar toggle for mobile
 const navbar = document.querySelector("[data-navbar]");
 const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
 const overlay = document.querySelector("[data-overlay]");

 const toggleNavbar = function name(params) {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
 }

 addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);