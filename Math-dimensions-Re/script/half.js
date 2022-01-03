window.addEventListener("load", function () {
    const half = this.document.getElementsByClassName("ball-5")[0]
    const HH = half.clientHeight
    const HW = half.clientWidth
    const RY = window.innerHeight - HH
    const RX = window.innerWidth - HW
    half.style.bottom = RY+"px"
    half.style.right = RX + "px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight
        const ratio = (window.scrollY) / (height)
        var dy = RY - (ratio * (RY / 2) * 2)
        var dx = RX - (ratio * (RX ) * 2)
        half.style.bottom = `${dy}px`
        half.style.right = `${dx}px`
        console.log(ratio);
        if (ratio > 0.5) {
            half.style.right = `${-dx}px`
        }
    })
})