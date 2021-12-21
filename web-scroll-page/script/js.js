window.addEventListener("scroll", ()=>{
    let revealR = document.querySelectorAll(".revealR");
    for (let i = 0; i < revealR.length; i++) {
    let content = revealR[i].getBoundingClientRect().top;
    let screen = window.innerHeight;
    if (content < screen) {
        revealR[i].classList.add("active");
    }
    else{
        revealR[i].classList.remove("active");
    }
};

});

window.addEventListener("scroll", ()=>{
    let revealB = document.querySelectorAll(".revealB");
    for (let i = 0; i < revealB.length; i++) {
    let content = revealB[i].getBoundingClientRect().top;
    let screen = window.innerHeight;
    if (content < screen) {
        revealB[i].classList.add("active")
    } 
    else{
        revealB[i].classList.remove("active")
    }
};
});

window.addEventListener("scroll", function () {
    let revealT = document.querySelectorAll(".revealT");
    for (let i = 0; i < revealT.length; i++) {
        let content = revealT[i].getBoundingClientRect().top;
        let screen = window.innerHeight;
        if (content < screen) {
            revealT[i].classList.add("active");
        }
        else {
            revealT[i].classList.remove("active");
        }
}
});

window.addEventListener("scroll", function () {
    let revealL = document.querySelector(".revealL");
    let content = revealL.getBoundingClientRect().top;
    let screen = window.innerHeight;
    if (content < screen) {
        revealL.classList.add("active");
    }
    else{
        revealL.classList.remove("active");
    }
})