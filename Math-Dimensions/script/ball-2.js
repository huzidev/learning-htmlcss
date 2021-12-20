window.addEventListener("load", function () {
   const ballR  = this.document.getElementsByClassName("ball-3")[0];
   const BR = {h: ballR.clientHeight, w: ballR.clientWidth};
   const res = {y: (window.innerHeight - BR.h), x: (window.innerWidth - BR.w)};
   ballR.style.top = res.y+"px";
   ballR.style.right = res.x+"px";
});