window.addEventListener("load", function () {
    let ball1 = document.getElementById("ball-1")[0];
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = scroll / height;
    });
});