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
}
});

window.addEventListener("scroll", ()=>{
    let revealB = document.querySelectorAll(".revealB");
    let content = revealB.getBoundingClientRect().top;


})