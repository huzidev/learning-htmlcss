// window.addEventListener("load", function () {
//     const top = this.document.getElementsByClassName("ball-6")[0];
//     const TH = top.clientWidth;
//     const TW = top.clientHeight;
//     const RY = window.innerHeight - TH;
//     const RX = window.innerWidth - TW;
//     top.style.bottom = RY+"px"
//     top.style.right = RX+"px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const width = this.document.body.clientWidth;
//         const ratio = (window.scrollY) / (height)
//         var dy = RY - (ratio * (RY / 2) * 2 )
//         var dx = RX - (ratio * (RX / 2) * 2)
//         top.style.bottom = `${dy}px`
//         top.style.right = `${dx}px`
//         if (ratio > 0.5) {
            
//             // r = 1.0 - ratio
//             // dy = RY - (r * RY)
//             // top.style.bottom = `${dy}px`

//             dyy = (RY - (RY / 2)) - (RY - (ratio * (RY / 2) * 2)) // BECAUSE WHEN RATIO BECAME 0.5 OURS HEIGHT BECAME HALF THERFORE WE WERE USING (RY / 2)
//             dy = (RY / 2) + (dyy)
//             top.style.bottom = `${dy}px`
//         }
//     })
// })