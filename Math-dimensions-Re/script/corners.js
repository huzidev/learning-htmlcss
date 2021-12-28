window.addEventListener("load", function () {
    const corner = this.document.getElementsByClassName("ball-4")[0];
    const CW = corner.clientHeight;
    const CH = corner.clientWidth;
    const RY = window.innerHeight - CH;
    const RX = window.innerWidth - CW;
    corner.style.bottom = RY+"px"
    corner.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
        const ratio = (window.scrollY) / (height);
    })
})