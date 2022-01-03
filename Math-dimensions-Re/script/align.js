window.addEventListener("load", function () {
    const align = this.document.getElementsByClassName("ball-7")[0];
    const AH = align.clientHeight;
    const AW = align.clientWidth;
    const RY = window.innerHeight - AH;
    const RX = window.innerWidth - AW;
    align.style.bottom = RY+"px"
    align.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const ratio = (window.scrollY) / (height)
        // var dy = RY - (ratio * (RY * 2))
        // var dx = RX - (ratio * (RX * 2))
        // align.style.bottom = `${dy}px`
        // align.style.right = `${dx}px`
        if (ratio >= 0 && ratio <= 0.5) {
            var dy = RY - ((ratio * 2) * RY)
            align.style.bottom = `${dy}px`
            align.style.right = `${RX}px` // MEANS IT'LL ALWAYS STOPS AT WINDOW.INNERHEIGHT - BALL.CLIENT HEIGHT WHICH IS OUR (RX)
        }
        if (ratio > 0.5 && ratio <= 1.0) {
            var dx = RX - (((ratio - 0.50) * 2) * RX)
            align.style.bottom = `0px`
            align.style.right = `${dx}px`

        }
    });
});