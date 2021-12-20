window.addEventListener("load", function () {
   const round = document.getElementsByClassName("ball-2");
   const R = { h: round.clientHeight, w: round.clientWidth};
   const final = { y: (innerHeight - R.h), x: (innerWidth - R.w)}; 
});