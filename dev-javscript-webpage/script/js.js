const menuIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
});


// Slider by JS

let index = 0;

window.onload = function () {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active");
    slide[index].classList.remove("remove");

    setInterval(() => {
        loops()
    }, 6000);
};

function loops() {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active");
    slide[index].classList.remove("active");
    index++;
    if ( index == slide.length) {
        index = 0;
    }
    slide[index].classList.add("active");
    console.log(index, slide.length);
};



// DISPLAY CHARACTER
