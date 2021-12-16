window.onload = function () {
  const ball = document.getElementsByClassName("ball")[0];
  window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = ( scroll / height );
        const dy = ratio * window.innerHeight;
        const dx = ratio * width;
        ball.style.top = `${dy}px`;
        ball.style.left = `${dx}px`;
  });
};