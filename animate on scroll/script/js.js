window.addEventListener("scroll", reveal);

function reveal() {
    const reveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal.length; i++) {
        const windowheight = window.innerHeight;
        const revealtop = reveal[i].getBoundingClientRect().top;
        const revealpoint = 150; //MEANS IF WE SCROLL 150PX IT'LL SCROLL THEN
        if (revealtop < windowheight - revealpoint) {
            reveal[i].classList.add("active");
        }
        else{
            reveal[i].classList.remove("active");
        }
    };
};