window.addEventListener("load", function () {
    const corner = this.document.getElementsByClassName("ball-4")[0];
    const CH = corner.clientHeight;
    const CW = corner.clientWidth;
    const RY = window.innerHeight - CH;
    const RX = window.innerWidth - CW;
    corner.style.bottom = RY+"px"
    corner.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const width = this.document.body.clientWidth;
        const ratio = (window.scrollY) / (height);
        // corner.style.bottom = `${dy}px`
        // corner.style.right = `${dx}px`  
        // console.log(ratio);
        if (ratio >= 0 && ratio <= 0.25) {
            // var dy = RY - (ratio * RY)
            var dx = RX - ((ratio * 4) * RX)
            corner.style.bottom = `${RY}px` // THIS IS IMPORTANT OTHER WISE THE BALL WILL SKIP FROM TOP IF WE CAME BACK AT HIGHER SPEED
            corner.style.right = `${dx}px`
            // console.log('dx',dx);
        } else if (ratio > 0.25 && ratio <= 0.50) { // WE DIDN'T USED >= 0.25 OTHERWISE CONFLICT WILL OCCUR BECAUSE WE'VE ALREADY USED <= TO 0.25 ABOVE
            var dy = RY - (((ratio-0.25) * 4) * RY); // SO IN EVERY CORNER WE'LL HAVE RATIO EQUAL TO ONE
            // var dx = RX - ((ratio * 4) * RX)
            corner.style.bottom = `${dy}px`
            corner.style.right = `0px`
        }
        else if (ratio > 0.50 && ratio <= 0.75){
            dx = RX - (((ratio - 0.25) * 4) * RX)
            corner.style.bottom = `0px`
            corner.style.right = `${-dx}px` 
        }
        else if (ratio > 0.75 && ratio <= 1.0) {
            r = 1.0 - ratio
            // dy = RY - (((ratio - 0.25) * 4) * RY)
            dy = RY - (r * (RY * 4))
            corner.style.bottom = `${dy}px`
            corner.style.right = `${RX}px` // WE DIDN'T USED 0PX THERE BECAUSE IF WE DID SO OURS BALL WILL SHIFT TOWARDS THE RIGHT CORNER WHENEVER THE RATIO BECAME MORE THAN 0.75
        }
    })
})