window.onload = function () {
  const ball = document.getElementsByClassName("ball")[0];
  const bd = {h : ball.clientHeight, w: ball.clientWidth};
  const init = { y: (window.innerHeight - bd.h), x: (window.innerWidth - bd.w) };
  ball.style.top = init.y+'px';
  ball.style.left = init.x+'px';
  window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = scroll / height;
        const dy = init.y - (ratio * window.innerHeight);
        const dx = init.x - (ratio * window.innerWidth);
        ball.style.top = `${dy}px`
        ball.style.left = `${dx}px`;
    console.log({ height, width, ratio, dx, dy, scroll, }, document.body.clientHeight, window.innerHeight);
  });
};