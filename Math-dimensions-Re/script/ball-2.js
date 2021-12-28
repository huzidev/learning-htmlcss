// window.addEventListener("load", function () {
//     const circle = this.document.getElementsByClassName("ball-2")[0];
//     const CH = circle.clientHeight;
//     const CW =  circle.clientWidth;
//     const RY = window.innerHeight - CH;
//     const RX = window.innerWidth - CW;
//     circle.style.bottom = RY+"px" 
//     circle.style.right = RX+"px"
//     window.addEventListener("scroll", function () {
//         var ratio = (window.scrollY) / (this.document.body.clientHeight - this.innerHeight)
//         var dy = RY - (ratio * (RY));
//         var dx = RX - (ratio * (RX));
//         // circle.style.bottom = `${dy}px`
//         // circle.style.right = `${dx}px`
//         if (ratio > 0.5) {
//             // const dyy = (RY - (0.5 * RY)) - dy
//             // dy = (RY *0.5) + (dyy)

//             // const dxx = (RX - (0.5 * RX)) - (RX - (ratio * RX))
//             // dx = (RX * 0.5) + (dxx)

//             r = 1.0 - ratio;
//             dy = RY - (r * RY);
//             dx = RX - (r * RX);
//             circle.style.bottom = `${dy}px`
//             circle.style.right = `${dx}px`
//         }
//         else{
//             circle.style.bottom = `${dy}px`
//             circle.style.right = `${dx}px`
//         }
//         let h = window.innerHeight
//         let w = window.innerWidth
//         // console.log(h, w);
//         // console.log(dy, dx, ratio, circle.style.bottom, circle.style.right);
//     })
// })