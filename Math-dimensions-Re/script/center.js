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
        const ratio = (window.scrollY) / (height)
        var dy = RY - (ratio * RY)
        var dx = RX - (ratio * RX)
        center.style.bottom = `${dy}px`
        center.style.right = `${dx}px`
        console.log(dy, dx, ratio);
        if (ratio > 0.5) {
            // const dxx = (RX - (0.5 * RX)) - (RX - (ratio * RX))
            // dx = (RX * 0.5) + (dxx)
            r = 1.0 - ratio;
            dx = RX - (r * RX);
            center.style.right = `${dx}px`
        }
    })
})