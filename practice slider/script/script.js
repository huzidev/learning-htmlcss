let index = 1;
setInterval(function(){
    document.getElementById("radio" + index).checked = true;  // WE DONT USES DASHES OR HYPHEN IN JAVASCRIPT 
    index++; // INCREMENT 
    if (index > 4 ) {
        index = 1;
    }
}, 3000);

let day = new Date("2021-11-29");
day = document.getElementById("day").innerHTML = day;
console.log(day);

let watch = new Date();
watch = document.getElementById("watch").innerHTML = watch;
console.log(watch);


let init = 0;
let init1 = 1;
let init2 = 2;
let init3 = 3;
let init4 = 4;

window.onload = function () {
    const slide = document.getElementsByClassName("repeat");
    slide[init].classList.add("active");
    slide[init].classList.add("img");
    slide[init1].classList.add("img-1");
    slide[init2].classList.add("img-2");
    slide[init3].classList.add("img-3");
    slide[init4].classList.add("img-4");
    setInterval(() => {
        loop();
    }, 3000);
};
function loop() {
    const slide = document.getElementsByClassName("repeat");
    slide[init].classList.remove("active");
    init++; // REMEMBER WE'VE TO PUT INCREMENT ONLY IN (LOOP)
    if ( init == slide.length) {
        init = 0;
    };
    slide[init].classList.add("active");
    console.log(slide.length, init);
};