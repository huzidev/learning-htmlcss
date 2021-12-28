window.addEventListener("load", function () {
    const all = this.document.getElementsByClassName("ball-8")[0];
    const AH = all.clientHeight;
    const AW = all.clientWidth;
    const RY = window.innerHeight - AH;
    const RX = window.innerWidth - AW;
    all.style.bottom = RY+"px"
    all.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const ratio = (window.scrollY) / (height)
        var dy = RY - (ratio * (RY))
        var dx = RX - (ratio * (RX))
        all.style.bottom = `${dy}px`
        all.style.right = `${dx}px`
        
    })
})