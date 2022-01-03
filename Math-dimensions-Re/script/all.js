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
//         var dy = RY - (ratio * (RY))
//         var dx = RX - (ratio * (RX))
//         all.style.bottom = `${dy}px`
//         if (ratio >= 0.5 && ratio <= 1.0) {
//             all.style.right = `${dx}px` // BECAUSE WE WANTED MOVEMENT IN THE HORIZONTAL AXIS
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
//             all.style.left = `${dx}px`
//         }
//     });
// });