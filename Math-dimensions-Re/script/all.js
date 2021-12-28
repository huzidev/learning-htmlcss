window.addEventListener("load", function () {
    const all = this.document.getElementsByClassName("ball-6")[0];
    const AH = all.clientHeight
    const AW = all.clientWidth;
    const RY = window.innerHeight - AH
    const RX = window.innerWidth - AW
    all.style.bottom = RY+"px"
    all.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - this.innerHeight
        const ratio = (window.scrollY) / (height)
        
    })
})