window.addEventListener("load", function (v) {
    const vertical1 = document.getElementsByClassName("vertical-1")[0];
    window.addEventListener("scroll", function (v) {
        const height = document.body.clientHeight - window.innerHeight;
        const scroll = window.scrollY;
        const ratio =  ( scroll / height );
    })
})