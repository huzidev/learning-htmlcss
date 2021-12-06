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
    slides[index].classList.remove("active");
    index++;
    if (index == slides.length) {
        index = 0;  
    };
    slides[index].classList.add("active")
}