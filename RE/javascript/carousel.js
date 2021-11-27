
let activeIndex = 0;
let activeIndex1 = 1;
let activeIndex2 = 2;
let activeIndex3 = 3;
let activeIndex4 = 4;
let activeIndex5 = 5;

window.onload = function () {  // MAKE SURE YOU PUT EQUAL SIGN AFTER WINDOW.ONLOAD
    const slides = document.getElementsByClassName("slide")

    slides[activeIndex].classList.add("active"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[activeIndex].classList.add("img") // THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[activeIndex1].classList.add("img-1"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[activeIndex2].classList.add("img-2"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[activeIndex3].classList.add("img-3"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[activeIndex4].classList.add("img-4"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    // slides[activeIndex5].classList.add("img-5"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS

    setInterval(() => {
        loopSlides();
    }, 2000);
};

function loopSlides() {
    const slides = document.getElementsByClassName("slide");
    slides[activeIndex].classList.remove("active");
    activeIndex++;

    if (activeIndex == slides.length) {
        activeIndex = 0;
    }


    slides[activeIndex].classList.add("active");
    console.log(slides.length, activeIndex);
}   
