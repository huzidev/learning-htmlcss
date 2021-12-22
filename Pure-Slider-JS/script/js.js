let slide = document.querySelectorAll(".slide-container");
let i = o;

function next() {
    slide[i].classList.remove("active");
    i = (i +1) % slide.length;
    slide[i].classList.add("active");
}