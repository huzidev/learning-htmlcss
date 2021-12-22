let slide = document.querySelectorAll(".slide-container");
let i = 0;

function next() {
    slide[i].classList.remove("active");
    i = (i +1) % slide.length;
    slide[i].classList.add("active");
}

function prev() {
    slide[i].classList.remove("active");
    i = (i - 1 + slide.length) % slide.length;
    slide[i].classList.add("active");
}

setInterval(next, 1500)