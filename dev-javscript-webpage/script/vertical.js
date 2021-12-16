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
    const height
})