// window.addEventListener("scroll", reveal);

// function reveal() {
//     const reveal = document.querySelectorAll(".reveal");
//     for (
//         var i = 0; 
//         i < reveal.length; 
//         i++
//         ) {
//         const windowheight = window.innerHeight;
//         const revealtop = reveal[i].getBoundingClientRect().top;
//         const revealpoint = 150; //MEANS IF WE SCROLL 150PX IT'LL SCROLL THEN
//         if (revealtop < windowheight - revealpoint) {
//             reveal[i].classList.add("active");
//         }
//         else{
//             reveal[i].classList.remove("active");
//         }
//     };
// };


// THIS METHOD IS ALOT EASIER
window.addEventListener("scroll", ()=>{
    let reveal = document.querySelector(".reveal");
    let cont = reveal.getBoundingClientRect().top;
    let screen = window.innerHeight / 2;
    if (cont < screen) {
        reveal.classList.add("active");
    }
    else{
        reveal.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    let reveal = document.querySelector(".reveal-r");
        let cont = reveal.getBoundingClientRect().top;
        let screen = window.innerHeight / 2;
        if (cont < screen) {
            reveal.classList.add("active");
        }
        else {
            reveal.classList.remove("active");
        }
});


window.addEventListener("scroll", () => {
    let reveal = document.querySelector(".reveal-l");
    let cont = reveal.getBoundingClientRect().top;
    let screen = window.innerHeight  / 2;
    if (cont < screen) {
        reveal.classList.add("active");
    }
    else {
        reveal.classList.remove("active");
    }
});