window.addEventListener("load", function () {
    const ball = document.getElementsByClassName("ball")[0];
    const B = {h: ball.clientHeight, w: ball.clientWidth}; // AS WE KNOW THAT WHEN WE WRITE DOCUMENT.(BODY.CLIENTHEIGHT) MEANS IT'LL COUNT (BODIES) COMPLETE HEIGHT MEAN ALL THE CONTENT AVAILABLE IN THE (BODY) NOW WE ARE USING (BALL.CLIENTHEIGHT) MEAN BALL HEIGHT WHICH IS 100PX 
    const init = {y: (window.innerHeight - B.h), x: (window.innerWidth - B.w)};
    ball.style.top = init.y+"px";
    ball.style.left = init.x+"px";
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = scroll / height;
        const dy = init.y - (ratio * (window.innerHeight - B.h));
        const dx = init.x - (ratio * (window.innerWidth - B.w));
        ball.style.top = `${dy}px`
        ball.style.left = `${dx}px`
        console.log(B, init, height, width, scroll, ratio, dy, dx);
    })
});


    