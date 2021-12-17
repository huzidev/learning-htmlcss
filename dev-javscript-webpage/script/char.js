let scrollfix;

function character() {
    let char = document.getElementById("character-base");
    let des = document.getElementById("character-desc");
    window.addEventListener("scroll", function () {
       clearTimeout(scrollfix);
       scrollfix = setTimeout(() => {
           let cond = {hello: window.innerHeight - 180};
           cond.want = cond.hello + document.getElementById("about").offsetHeight - 100;
       }, 100); 
    });
};