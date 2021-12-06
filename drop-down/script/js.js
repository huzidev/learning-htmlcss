let index = 0;

window.onload = function() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.add("active");
    setInterval(() => {
        loops();
    }, 3000);
};

function loops() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.remove("active");
    index++;
    if (index == slides.length) {
        index = 0;  
    };
    slides[index].classList.add("active")
    console.log(index, slides.length);
};