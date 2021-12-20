window.addEventListener("load", function () {
   const round = document.getElementsByClassName("ball-2")[0];
   const R = { h: round.clientHeight, w: round.clientWidth};
   const final = { y: (window.innerHeight - R.h), x: (window.innerWidth - R.w)};
   round.style.bottom = final.y+"px";
   round.style.left = final.x+"px";
   window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = scroll / height;
        const dy =  ratio * innerHeight;
        const dx = ratio * width;
        round.style.bottom = `${dy}px`;
       round.style.left = `${dx}px`;
   })
});