window.addEventListener("load", function () {
    const top = this.document.getElementsByClassName("ball-6")[0];
    const TH = top.clientWidth;
    const TW = top.clientHeight;
    const RY = window.innerHeight - TH;
    const RX = window.innerWidth - TW;
    top.style.bottom = RY+"px"
    top.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
        const ratio = (window.scrollY) / (height)
        var dy = RY - (ratio * (RY))
        var dx = RX - (ratio * (RX))
        top.style.bottom = `${dy}px`
        top.style.right = `${dx}px`
    })
})