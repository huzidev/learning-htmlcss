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
    let reveal = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveal.length; i++) {
    let cont = reveal[i].getBoundingClientRect().top;
    let screen = window.innerHeight;
    if (cont < screen) {
        reveal[i].classList.add("active");
    }
    else{
        reveal[i].classList.remove("active");
    }
    }
})