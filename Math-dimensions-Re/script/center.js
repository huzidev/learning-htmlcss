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
        var dy = RY - (ratio * (RY))
        var dx = RX - (ratio * (RX)) // WE MADE IT AN VARIABLE SO IT CAN BE CHANGED AT ANY TIME IF IT WAS AN CONSTANT SO IT CAN'T BE CHANGED AT ANY INSTANCE
        center.style.bottom = `${dy}px`
        center.style.right = `${dx}px`
        console.log(dy, dx, ratio);
        if (ratio > 0.5) {

            const dxx = ((648)) - (RX - (ratio * RX)) // 648 IS THE EXACT WIDTH OF OURS WEB-PAGE (WHEN) RATIO HITS 0.5 OTHERWISE THE COMPLETE WIDTH IS (1300)
            dx = (648) + (dxx) // 648 IS BASICALLY (1300 * 0.5) MEANS HALF OF 1300PX
            center.style.right = `${dx}px`

            // r = 1.0 - ratio;
            // dx = RX - (r * RX);
            // center.style.right = `${dx}px`
            console.log(dx); // WE CAN SEE IN THE LOG THAT WHEN RATIO BECAME 0.5 THE WIDTH OF OURS BODY STARTS INCREASING ONCE AGAIN RATHER THAN DECREASING
        }
    })
})