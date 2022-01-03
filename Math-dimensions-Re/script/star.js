window.addEventListener("load", function () {
    const star = this.document.getElementsByClassName("ball-14")[0];
    const SH = star.clientHeight;
    const SW = star.clientWidth;
    const RY = window.innerHeight - SH;
    const RX = window.innerWidth - SW;
    star.style.bottom = RY + "px";
    star.style.right = RX + "px";
})