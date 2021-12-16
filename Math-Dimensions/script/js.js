window.onload = function () {
  const ball = document.getElementsByClassName("ball")[0];
  window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = ( scroll / height );
        const yratio = ( window.innerHeight * ratio) ;
        const dy = window.innerHeight - yratio;
        const dx = ratio * width;
        ball.style.top = `${dy}px`
        ball.style.right = `${dx}px`;
    console.log({ height, width, ratio, dx, dy, scroll, }, document.body.clientHeight, window.innerHeight, yratio);
  });
};