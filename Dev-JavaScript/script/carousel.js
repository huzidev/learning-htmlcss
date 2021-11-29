console.log("carousel JS");


let index = 0;
let index1 = 1;
let index2 = 2;
let index3 = 3;
let index4 = 4;
let index5 = 5;

window.onload = function () {  // MAKE SURE YOU PUT (EQUAL) SIGN AFTER WINDOW.ONLOAD
    const slides = document.getElementsByClassName("slide");

    slides[index].classList.add("real"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index].classList.add("image") // THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index1].classList.add("image-1"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index2].classList.add("image-2"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index3].classList.add("image-3"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index4].classList.add("image-4"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS
    slides[index5].classList.add("image-5"); //THIS IS THE METHOD FOR ADDING CLASSES BY JS

    setInterval(() => {
        loop();
    }, 2000);
};

function loop() {
    const slides = document.getElementsByClassName("slide");
    slides[index].classList.remove("real");
    index++;

    if (index == slides.length) {
        index = 0;
    };


    slides[index].classList.add("real");
    console.log(slides.length, index);
}   


let date = new Date("2021-11-27");
date = document.getElementById("date").innerHTML = date;
console.log(date);