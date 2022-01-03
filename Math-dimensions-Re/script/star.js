window.addEventListener("load", function () {
    const star = this.document.getElementsByClassName("ball-14")[0];
    const SH = star.clientHeight;
    const SW = star.clientWidth;
    const RY = window.innerHeight - SH;
    const RX = window.innerWidth - SW;
    star.style.bottom = RY + "px";
    star.style.right = (RX / 2) + "px";
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight;
        const ratio = (window.scrollY) / (height)
        if (ratio >= 0 && ratio <= 0.25) {
            var dy = RY - ((ratio ) * (RY) * 2);
            var dx = RX - ((ratio ) * (RX) * 4);
            star.style.bottom = `${dy}px`
            star.style.right = `${dx / 2}px`
        }
        else if (ratio > 0.25 && ratio <= 0.50) {
            dy = RY - (ratio * (RY * 2))
            dx = RX - (ratio * (RX) * 4)
            star.style.bottom = `${dy}px`
            star.style.right = `${-dx / 2}px`
        }
        else if (ratio > 0.50 && ratio <= 0.75) {
            dy = RY - (ratio * (RY * 2))
            dx = RX - (ratio * (RX) * 4)    
            star.style.bottom = `${-dy}px`
            star.style.right = `${-dx / 2}px`
        }
        else if (ratio > 0.75 && ratio <= 1.0) {
            dy = RY - (ratio * (RY) * 2)
            dx = RX - ((ratio - 0.75) * (RX) * 2 ) // WE USED (-0.75) BECAUSE AS JUST OUTS RATIO HIT (0.75) THE BALL MOVES (0.75) IN RATIO SO WE JUST MINUS THAT VALUE SO IT WON'T JUMP THAT MUCH
            star.style.bottom = `${-dy}px`
            star.style.right = `${dx}px`

            // xr = 0.75 + ratio;
            // r = 1.0 - ratio
            // dy = RY - (r * (RY) * 2)
            // // dx = (RX) - (xr * RX)
            // dx = (RX) - (r  * (RX / 2))
            // console.log(r, dx, ratio, RX);
            // star.style.bottom = `${dy}px`
            // star.style.right = `${dx}px`
        }


        // if (ratio >= 0 && ratio <= 0.25) {
        //     var dx = RX - ((ratio) * 4 * (RX))
        //     var dy = RY - (((ratio) * 4) * RY)
        //     star.style.right = `${dx / 2}px`
        //     star.style.bottom = `${dy / 2}px`
        // } 
        
        // else if (ratio > 0.25 && ratio <= 0.50) { 
          
        // }
        // else if (ratio > 0.50 && ratio <= 0.75) {
           
        // }
        // else if (ratio > 0.75 && ratio <= 1.0) {
        
        // }
    })
})