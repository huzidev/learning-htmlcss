window.addEventListener("load", function () {
    const content = this.document.getElementsByClassName("ball-12")[0];
    const CH = content.clientHeight;
    const CW = content.clientWidth;
    const RY = window.innerHeight - CH
    const RX = window.innerWidth - CW
    content.style.bottom = (window.innerHeight / 2)+"px"
    content.style.right = RX+"px"
        
})