const menuIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
})