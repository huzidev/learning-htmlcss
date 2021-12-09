const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar");


menuIcon.addEventListener("click", () =>{
    navBar.classList.toggle("change");
    // WE DONT HAVE TO USE CLASS ADD OR CLASS REMOVE IT WONT WORK HERE INSTEAD WE JUST USED TOGGLE
});