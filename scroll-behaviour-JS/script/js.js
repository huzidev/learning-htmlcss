// window.addEventListener("scroll", function () {
//     const reveal = this.document.querySelectorAll(".revealL");
//     const content = reveal[i].getBoundingClientRect().top;
// })


window.addEventListener("scroll", function () {
    const reveal = this.document.querySelectorAll(".revealL");
    for (let i = 0; i < reveal.length; i++) {
        if (window.pageYOffset > 500) {
            reveal[i].classList.add("active");
        }
        else{
            reveal[i].classList.remove("active");
        }
};
});