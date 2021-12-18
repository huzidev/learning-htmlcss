window.addEventListener("load", function () {
    const square = document.getElementsByClassName("ball-1")[0];
    const SQ = {h: square.clientHeight, w: square.clientWidth};
    const result = { y: (wind.innerHeight - SQ.h), w: (clientWidth - SQ.w)};
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = (scroll / height);
        const dy = ratio * window.innerHeight;
        const dx = ratio * width;
        square.style.bottom = `${dy}px`;
        square.style.left = `${dx}px`;
    });
}, false);