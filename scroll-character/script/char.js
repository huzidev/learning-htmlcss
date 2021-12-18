let scrollFix;

function character() {
    let desc = document.getElementById("character-desc");
    let char = document.getElementById("character-char");
    window.addEventListener("scroll", function () {
        clearTimeout(scrollFix);
        scrollFix = setTimeout(() => {
            let cond = {hello: window.innerHeight - 180};
            cond.looking = cond.hello + document.getElementById("about").offsetHeight - 100; 
        }, 100);
    });
};