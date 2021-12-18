window.addEventListener("load", function () {
    const square = document.getElementsByClassName("ball-1")[0];
    const SQ = {h: square.clientHeight, w: square.clientWidth};
    const result = { y: (window.innerHeight - SQ.h), x: (window.clientWidth - SQ.w)};
    ball.style.bottom = result.y+`px`;
    ball.style.left = result.x+`px`;
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = (scroll / height);
        const dy = result.y - (ratio * window.innerHeight);
        square.style.bottom = `${dy}px`;
        square.style.left = `${dx}px`;
    });
}, false);