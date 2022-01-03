// window.addEventListener("load", function () {
//     const all = this.document.getElementsByClassName("ball-8")[0];
//     const AH = all.clientHeight;
//     const AW = all.clientWidth;
//     const RY = window.innerHeight - AH;
//     const RX = window.innerWidth - AW;
//     all.style.bottom = RY+"px"
//     all.style.right = (RX / 2)+"px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const ratio = (window.scrollY) / (height)
//         if (ratio >=0 && ratio <= 0.50) {
//             var dy = RY - (ratio * RY)
//             all.style.bottom = `${dy}px`
//             all.style.right = `${RX / 2}px`
//         }
//         if (ratio > 0.50 && ratio <= 1.0) {
//             var dx = RX - (ratio * RX);
//             dy = RY - (ratio * RY)
//             all.style.bottom = `${dy}px`
//             all.style.left = `${dx}px`;
//         }
//     });
// });


// window.addEventListener("load", function () {
//     const all = this.document.getElementsByClassName("ball-9")[0];
//     const AH = all.clientHeight;
//     const AW = all.clientWidth;
//     const RY = window.innerHeight - AH;
//     const RX = window.innerWidth - AW;
//     all.style.bottom = RY + "px"
//     all.style.right = (RX / 2) + "px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const ratio = (window.scrollY) / (height)
//         var dy = RY - (ratio * (RY))
//         var dx = RX - (ratio * (RX))
//         all.style.bottom = `${dy}px`
//         if (ratio >= 0.5 && ratio <= 1.0) {
//             // all.style.right = `${dx}px` // BECAUSE WE WANTED MOVEMENT IN THE HORIZONTAL AXIS
//             r = 1.0 - ratio;
//             dy = RY - (r * RY)
//             all.style.bottom = `${dy}px`
//             all.style.left = `${dx}px`
//         }
//     });
// });