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
    if () {
        
    }
}