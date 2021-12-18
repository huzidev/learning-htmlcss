let scrollFix;

function character() {
    let desc = document.getElementById("character-desc");
    let char = document.getElementById("character-char");
    window.addEventListener("scroll", function () {
        clearTimeout(scrollFix);
        scrollFix = setTimeout(() => {
            
        }, 100);
    });
};