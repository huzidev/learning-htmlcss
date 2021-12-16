window.addEventListener("load", function (BR) {
   const bottomR = document.getElementsByClassName("bottom-left");
   window.addEventListener("scroll", function (BR) {
       const height = document.body.clientHeight - window.innerHeight;
       const width = document.body.clientWidth;
       const scroll = window.scrollY;
       const ratio = ( scroll / height);

   }) 
});