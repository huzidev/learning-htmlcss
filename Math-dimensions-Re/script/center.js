window.addEventListener("load", function () {
    const center = this.document.getElementsByClassName("ball-3")[0];
    const CH = center.clientHeight;
    const CW = center.clientWidth;
    const RY = window.innerHeight - CH
    const RX = window.innerWidth - CW
    center.style.bottom = RY+"px"
    center.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
    })
})