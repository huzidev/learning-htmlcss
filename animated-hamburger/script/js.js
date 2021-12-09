const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar");


menuIcon.addEventListener("click", () =>{
    navBar.classList.toggle("change");

});