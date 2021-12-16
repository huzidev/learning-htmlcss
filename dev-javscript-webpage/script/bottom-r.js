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

// CLIENTHEIGHT MEANS THE TOTAL HEIGHT AVAILABLE IN OURS WEB-PAGE BODY IT JUST THE MATTER OF CONTENT WE USED IN THE BODY THE HEIGHT WILL INCREASES ACCORDING TO OURS CONTENT IN BODY FOR INSTANCE IN THIS WEB-SITE (DEV-JAVASCRIPT-WEBPAGE) THE TOTAL CONTENT CLIENT HEIGHT IS ABOUT 3856PX (AND YOUUU) CAN CONFIRM IT BY GOING TO THE  CONSOLE THEN SCROLL TO BOTTOM THEN YOU CAN CHECK THAT 3856PX IS AVAILABLE WE SCROLLED DOWN 3403.5 PX MEANS RESIDUE OR INNERHEIGHT AVAILABLE IS 452PX IT CAN BE DIFFERENT IF WE INCREASES OR DECREASE THE CONSOLE HEIGHTS IT SELF


// INNERHEIGHT IS BASICALLY THE HEIGHT VISIBLE IT CAN BE 500PX IF VISIBLE IN FULL PAGE AND IT CAN 300PX IF WE OPEN CONSOLE IT JUST DEPENDS UPON HOW MUCH CONTENT IS (VISIBLE)