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
            // center.style.center = `${-dy}px`
            // center.style.left = `${dx}px`

            const dxx = ((648)) - (RX - (ratio * RX)) // 648 IS THE EXACT WIDTH OF OURS WEB-PAGE
            dx = (RX * 0.5) + (dxx)
            center.style.right = `${dx}px`
            // r = 1.0 - ratio;
            // dx = RX - (r * RX);
            // center.style.right = `${dx}px`
        }
    })
})