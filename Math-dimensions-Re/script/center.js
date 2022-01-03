// window.addEventListener("load", function () {
//     const center = this.document.getElementsByClassName("ball-3")[0];
//     const CH = center.clientHeight;
//     const CW = center.clientWidth;
//     const RY = window.innerHeight - CH
//     const RX = window.innerWidth - CW
//     center.style.bottom = RY+"px"
//     center.style.right = RX+"px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const width = this.document.body.clientWidth;
//         const ratio = (window.scrollY) / (height)
//         if (ratio >= 0 && ratio <= 0.5) {
//             var dy = RY - ((ratio) * RY)
//             var dx = RX - ((ratio) * RX) // WE MADE IT AN VARIABLE SO IT CAN BE CHANGED AT ANY TIME IF IT WAS AN CONSTANT SO IT CAN'T BE CHANGED AT ANY INSTANCE
//             center.style.bottom = `${dy}px`
//             center.style.right = `${dx}px`
//         }
//         if (ratio > 0.5 && ratio <= 1.0) {
//             r = 1.0 - ratio
//             dy = RY - (ratio * RY )
//             center.style.bottom = `${dy}px` 
//             dx = RX - (r * RX)
//             center.style.right = `${dx}px`
//         }
//     })
// })