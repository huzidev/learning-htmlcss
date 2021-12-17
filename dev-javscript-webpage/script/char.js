let scrollfix;

function character() {
    let char = document.getElementById("character-base");
    let des = document.getElementById("character-desc");
    window.addEventListener("scroll", function () {
       clearTimeout(scrollfix);
       scrollfix = setTimeout(() => {
           
       }, 100); 
    });
};