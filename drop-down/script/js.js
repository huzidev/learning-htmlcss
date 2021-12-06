let index = 0;

window.onload = function() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.add("active");
    setInterval(() => {
        loops();
    }, 2000);
};

