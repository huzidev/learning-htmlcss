window.addEventListener("load", ()=>{
    const square = document.querySelector(".ball-1");
    const SQ = {h: square.clientHeight, w: square.clientWidth};
    const result = {y: (window.innerHeight - SQ.h), x:(window.innerWidth - SQ.w)};
    square.style.top = result.y+"px";
    square.style.right = result.x+"px";
    window.addEventListener("scroll", ()=>{
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = scroll / height;
        const dy = result.y - (ratio * window.innerHeight);
        const dx = result.x - (ratio * window.innerWidth);
        square.style.top = `${dy}px`;
        square.style.right = `${dx}px`;
        console.log(square, SQ, result, ratio);
    });
});