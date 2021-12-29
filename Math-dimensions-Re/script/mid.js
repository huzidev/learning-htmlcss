// window.addEventListener("load", function () {
//     const mid = this.document.getElementsByClassName("ball-13")[0];
//     const MH = mid.clientHeight;
//     const MW = mid.clientWidth;
//     const RY = window.innerHeight - MH
//     const RX = window.innerWidth - MW
//     mid.style.bottom = (window.innerHeight / 2) + "px"
//     mid.style.right = RX + "px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight
//         const ratio = (window.scrollY) / (height)
//         var dy = RY - (ratio * (RY * 2));
//         var dx = RX - (ratio * (RX) * 2);
//         mid.style.bottom = `${dy / 2}px` // THIS METHOD IS USED IF WE WANTED TO MOVE IT FROM HALF OF THE Y-AXIS MEANS FROM THE CENTER OF THE PAGE
//         mid.style.right = `${dx}px`
//         if (ratio > 0.5) {
//             dx = RX - RX
//             mid.style.right = `${dx}px`
//             mid.style.bottom = `${- dy / 2}px`
//         }
//     })
// })