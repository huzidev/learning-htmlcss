window.addEventListener("load", function () {
    const star = this.document.getElementsByClassName("ball-14")[0];
    const SH = star.clientHeight;
    const SW = star.clientWidth;
    const RY = window.innerHeight - SH;
    const RX = window.innerWidth - SW;
    star.style.bottom = RY + "px";
    star.style.right = (RX / 2) + "px";
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const ratio = (window.scrollY) / (height)
        if (ratio >= 0 && ratio <= 0.25) {
            var dy = RY - (ratio * RY);
            var dx = RX - (ratio * RX);
        }
    })
})