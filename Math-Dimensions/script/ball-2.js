window.addEventListener("load", function () {
   const ballR  = this.document.getElementsByClassName("ball-3")[0];
   const BR = {h: ballR.clientHeight, w: ballR.clientWidth};
   const res = {y: (window.innerHeight - BR.h), x: (window.innerWidth - BR.w)};
   ballR.style.top = res.y+"px";
   ballR.style.right = res.x+"px";
   window.addEventListener("scroll", function () {
       const height = this.document.body.clientHeight - window.innerHeight;
       const width = this.document.body.clientWidth;
       const scroll = window.scrollY;
       const ratio = scroll / height;
       const dy =  res.y - (ratio * window.innerHeight);
       const dx = res.x - (ratio * window.innerWidth);
       ballR.style.top = 
   });
});