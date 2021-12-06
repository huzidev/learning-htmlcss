let index = 0;

window.onload = function() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.add("active");
    setInterval(() => {
        loops();
    }, 2000);
};

function loop() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.add("active");
    if (index == slides.length) {
        index = 0;
    }
}