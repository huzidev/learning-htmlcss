let index = 1;
setInterval(function(){
    document.getElementById("radio" + index).checked = true;
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


let i = 0;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

window.onload = function () {
    const slide = document.getElementsByClassName("repeat");
    slide[i].classList.add("active");
};