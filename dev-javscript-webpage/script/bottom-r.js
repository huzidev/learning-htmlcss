window.addEventListener("load", function (BR) {
    const bottomR = document.getElementsByClassName("bottom-right")[0];
    window.addEventListener("scroll", function (BR) {
       const height = document.body.clientHeight - window.innerHeight;
       const width = document.body.clientWidth;
       const scroll = window.scrollY;
       const ratio = ( scroll / height );
       const dy = ratio * innerHeight;
       const dx = ratio * width;
       bottomR.style.bottom = `${dy}px`;
       bottomR.style.right = `${dx}px`;
       bottomR.style.marginRight = `100px`;
    });
}, false);