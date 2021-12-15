window.onload = function () {
    const square = document.getElementsByClassName("square")[0]; // THIS ZERO MEANS STARTING FROM ZERO LIKE WE USED IN SLIDER (INDEX = 0)
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;// WE DIDN'T USED (- INNERWIDTH ) BECAUSE WE HAVEN'T ANY HORIZONTAL SCROLL 
        const scroll = window.scrollY // BECAUSE WE WANTED ONLY VERTICAL SCROLL THEREFORE (SCROLLY)
        const ratio = 
    });
};