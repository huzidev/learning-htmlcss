window.onload = function () {
    const square = document.getElementsByClassName("square")[0]; // THIS ZERO MEANS STARTING FROM ZERO LIKE WE USED IN SLIDER (INDEX = 0)
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;// WE DIDN'T USED (- INNERWIDTH ) BECAUSE WE HAVEN'T ANY HORIZONTAL SCROLL 
        const scroll = window.scrollY // BECAUSE WE WANTED ONLY VERTICAL SCROLL THEREFORE (SCROLLY)
        const ratio = (scroll / height); // SCROLL / HEIGHT BECAUSE WE JUST WANTED RESULT OF HEIGHT ACCORDING TO THE RESPECTIVE SCROLL
        const dy = ratio * window.innerHeight; // RATIO WHICH IS EQUAL TO (SCROLL/HEIGHT ) AS WE MENTIONED AND WE MULTIPLY BY INNERHEIGHT BECAUSE WE USED CLIENTHEIGHT - WINDOW.INNERHEIGHT
        const dx = ratio * width;
        console.log({scroll, height, width});
        console.log({ dy, dx, ratio});
        square.style.top = `${dy}px`;
        square.style.right = ` ${dx}px`;
        square.style.marginRight = `100px` // REMEBER WE DONT USED (DESH) IN JAVASCRIPT INSTEAD WE USED THE FIRST LETTER AFTER DESH AS TO BE CAPITAL AS WE USE THERE
    });
};