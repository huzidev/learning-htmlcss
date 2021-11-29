let index = 1
window.onload = function () {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active");
setInterval(() => {
    loop()
    }, 2000);
};

function loop() {
    const slide = document.getElementsByClassName("slide"); 
    slide[index].classList.remove("active");
    index++;
    if (index == slide.length) {
        index = 0;
    };
    slide[index].classList.add("active")
};