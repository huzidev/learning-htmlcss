let scrollfix;

function character() {
    let char = document.getElementById("character-base");
    let des = document.getElementById("character-desc");
    window.addEventListener("scroll", function () {
       clearTimeout(scrollfix);
       scrollfix = setTimeout(() => {
           let cond = {hello: window.innerHeight - 180};
           cond.looking = cond.hello + document.getElementById("about").offsetHeight - 100; // OFFSET HEIGHT INCLUDES VIEWABLE HEIGHT INCLUDES PADDING, BORDER & SCROLL-BAR BUT NOT THE MARGIN
           cond.skills = cond.looking + document.getElementById("status").offsetHeight + 240;  
           cond.contact = cond.skills + document.getElementById("portfolio").offsetHeight + 750;
       }, 100); 
    });
};