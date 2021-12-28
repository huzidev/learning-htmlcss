window.addEventListener("load", function () {
    const top = this.document.getElementsByClassName("ball-6")[0];
    const TH = corner.clientWidth;
    const TW = corner.clientHeight;
    const RY = window.innerHeight - CH;
    const RX = window.innerWidth - CW;
    corner.style.bottom = RY+"px"
    corner.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
        const ratio = (window.scrollY) / (height);