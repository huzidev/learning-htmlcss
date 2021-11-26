let activeIndex = 0;

window.onload = function () {
    const slides = document.getElementsByClassName('slide');
    
    slides[activeIndex].classList.add('active');

    setInterval(() => {
        loopSlides();
    }, 4000);
}

function loopSlides() {
    const slides = document.getElementsByClassName('slide');
    slides[activeIndex].classList.remove('active');
    activeIndex++;
    if (activeIndex == slides.length) {
        activeIndex = 0;
    }
    slides[activeIndex].classList.add('active');

    console.log(slides.length, activeIndex);
}