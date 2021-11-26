let activeIndex = 0;

window.onload = function () {
    const slides = document.getElementsByClassName('slide');
    
    slides[activeIndex].classList.add('active');

    setInterval(() => {
        loopSlides();
    }, 2000);
}

function loopSlides() {
    const slides = document.getElementsByClassName('slide');
    slides[activeIndex].classList.remove('active');
    activeIndex++; // ENCRYMENT
    if (activeIndex == slides.length) {
        activeIndex = 0; // MEANS WHEN SLIDES LENGTH BECOME EQUALS TO SLIDES.LENGTH IT'LL BECOME EQUAL TO 0 (WHICH IS THE FIRST CHILD) MEANS IT'LL REPEATS IT SELF AGAIN
    }
    slides[activeIndex].classList.add('active');

    console.log(slides.length, activeIndex);
}