const menuIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
});


// Slider by JS

let index = 0;

window.onload = function () {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active")
}