window.addEventListener("load", function (v1) {
    const vertical1 = document.getElementsByClassName("vertical-1")[0];
    window.addEventListener("scroll", function (v1) {
        const height = document.body.clientHeight - window.innerHeight;
        const scroll = window.scrollY;
        const ratio =  ( scroll / height );
        const dy = ratio * window.innerHeight;
        vertical1.style.top = `${dy}px` 
    });
}, false);

window.addEventListener("load", function (v2) {
    const vertical2 = document.getElementsByClassName("vertical-2")[0];
    window.addEventListener("scroll", function (v2) {
        const height = document.body.clientHeight - window.innerHeight;
        const scroll = window.scrollY;
        const ratio = ( scroll / height );
        const dy = ratio * window.innerHeight;
        vertical2.style.top = `${dy}px`;
    })
}, false);

window.addEventListener("load", function (v3) {
    const vertical3 = document.getElementsByClassName("vertical-3")[0];
    window.addEventListener("scroll", function (v3) {
       const height = document.body.clientHeight - window.innerHeight;
       const scroll = window.scrollY;
       const ratio = ( scroll / height);
       const dy = ratio * window.innerHeight;
       vertical3.style.bottom = `${dy}px`;
    });
}, false);

window.addEventListener("load", function (v4) {
    const vertical4 = document.getElementsByClassName("vertical-4")[0];
    window.addEventListener("scroll", function (v4) {
       const height = document.body.clientHeight - window.innerHeight;
       const scroll = window.scrollY;
       const ratio = ( scroll / height);
       const dy = ratio * window.innerHeight;
       vertical4.style.bottom = `${dy}px`; 
    });
}, false);



// CLIENTHEIGHT MEANS THE TOTAL HEIGHT AVAILABLE IN OURS WEB-PAGE BODY IT JUST THE MATTER OF CONTENT WE USED IN THE BODY THE HEIGHT WILL INCREASES ACCORDING TO OURS CONTENT IN BODY FOR INSTANCE IN THIS WEB-SITE (DEV-JAVASCRIPT-WEBPAGE) THE TOTAL CONTENT CLIENT HEIGHT IS ABOUT 3856PX (AND YOUUU) CAN CONFIRM IT BY GOING TO THE  CONSOLE THEN SCROLL TO BOTTOM THEN YOU CAN CHECK THAT 3856PX IS AVAILABLE WE SCROLLED DOWN 3403.5 PX MEANS RESIDUE OR INNERHEIGHT AVAILABLE IS 452PX IT CAN BE DIFFERENT IF WE INCREASES OR DECREASE THE CONSOLE HEIGHTS IT SELF
//  ONE MORE THING CLIENTHEIGHT INCLUDES PADDING BUT NOT BORDER, MARGIN OR SCROLL BAR
// RATIO IS A KIND OF PERCENTAGE BUT EXCLUDING (*100) MEANS IF PERCENTAGE IS 98 THE RATIO WILL BE (.98) BCZ WE EXCLUDE (*100)

// INNERHEIGHT IS BASICALLY THE HEIGHT VISIBLE IT CAN BE 500PX IF VISIBLE IN FULL PAGE AND IT CAN 300PX IF WE OPEN CONSOLE IT JUST DEPENDS UPON HOW MUCH CONTENT IS (VISIBLE)