// window.addEventListener("load", function () {
//     const corner = this.document.getElementsByClassName("ball-4")[0];
//     const CW = corner.clientHeight;
//     const CH = corner.clientWidth;
//     const RY = window.innerHeight - CH;
//     const RX = window.innerWidth - CW;
//     corner.style.bottom = RY+"px"
//     corner.style.right = RX+"px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const width = this.document.body.clientWidth;
//         const ratio = (window.scrollY) / (height);
//         var dy = RY - (ratio * (RY)*5)
//         var dx = RX - (ratio * (RX)*5)
//         // corner.style.bottom = `${dy}px`
//         // corner.style.right = `${dx}px`  
//         // console.log(ratio);
//         if (ratio < 0.20) {
//             // dx = RX - (ratio * (RX) * 4)
//             corner.style.right = `${dx}px`
//             // console.log(dx, ratio);
//         }
//         if (ratio > 0.20) {
//             // dy = RY - (ratio * (RY) * 4)
//             dx = RX - RX
//             const dyy = (RY - (0.5 * RY)) + dy
//             dy = (RY * 0.5) + (dyy)  
//             corner.style.bottom = `${dy}px`

//         }
//         if (ratio > 0.40) {
//             dy = RY - RY
//             dx = RX - (ratio * (RX) * 2.5 )    
//             corner.style.bottom = `${dy}px`
//             corner.style.right = `${-dx}px`
//         }
//         if (ratio > 0.798) {
//             dx = RX - RX
//             dy = RY - (ratio * (RY) * 2)
//             corner.style.bottom = `${-dy}px`
//             corner.style.right = `${-dx}px`
//             console.log(ratio);
//         }
      

        
       
//     })
// })