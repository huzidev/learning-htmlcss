window.addEventListener("load", function (B) {
    const bottomL = document.getElementsByClassName("bottom-left")[0]; // THIS [0] IS VERY IMPORTANT OTHERWISE IT'LL WONT WORK
    window.addEventListener("scroll", function (B) {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = ( scroll / height);
        const dy = ratio * window.innerHeight;
        const dx = ratio * width;
        bottomL.style.bottom = `${dy}px`;
        bottomL.style.left = `${dx}px`;
    });
}, false);