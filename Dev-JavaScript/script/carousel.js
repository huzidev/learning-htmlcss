console.log("carousel JS");


let index = 0;
let index1 = 1;
let index2 = 2;
let index3 = 3;
let index4 = 4;
let index5 = 5;

onload = function () {  // MAKE SURE YOU PUT (EQUAL) SIGN AFTER WINDOW.ONLOAD
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
    index++;  // MAKE SURE WE INCREMENT OTHERWISE IT'LL NOT RUN

    if (index == slides.length) {
        index = 0;
    };


    slides[index].classList.add("real");
    console.log(slides.length, index);
}   


let date = new Date("2021-11-27");
date = document.getElementById("date").innerHTML = date;
console.log(date);

let live = new Date();
live = document.getElementById("live").innerHTML = live;



    // let init = 0;
    // let init1 = 1;
    // let init2 = 2;
    // let init3 = 3;
    // let init4 = 4;
    // let init5 = 5;
    // let init6 = 6;
    // let init7 = 7;
    // let init8 = 8;
    // let init9 = 9;

    // window.onload = function () {
    //     const carousel = document.getElementsByClassName("repeat");
    //     carousel[init].classList.add("active");
    //     carousel[init].classList.add("img");
    //     carousel[init1].classList.add("img-1");
    //     carousel[init2].classList.add("img-2");
    //     carousel[init3].classList.add("img-3");
    //     carousel[init4].classList.add("img-4");
    //     carousel[init5].classList.add("img-5");
    //     carousel[init6].classList.add("img-6");
    //     carousel[init7].classList.add("img-7");
    //     carousel[init8].classList.add("img-8");
    //     carousel[init9].classList.add("img-9");

    //     setInterval(() => {
    //         slideBar();
    //     }, 3000);
    // };


    // function slideBar() {
    //     const carousel = document.getElementsByClassName("repeat");
    //     carousel[init].classList.remove("active"); 
    //     init++; 

    //     if( init == carousel.length ){
    //         init = 0;
    //     };

    //     carousel[init].classList.add("active");
    //     console.log(carousel.length, init);

    // };


