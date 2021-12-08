const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () =>{
    if (!menuBtn) {
        menuBtn.classList.add("open")
    }
})