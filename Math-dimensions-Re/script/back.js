// window.addEventListener("load", function () {
//     const all = this.document.getElementsByClassName("ball-10")[0];
//     const AH = all.clientHeight;
//     const AW = all.clientWidth;
//     const RY = window.innerHeight - AH;
//     const RX = window.innerWidth - AW;
//     all.style.bottom = RY + "px"
//     all.style.right = (RX / 2) + "px" // MEANS CENTER OF WIDTH
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const ratio = (window.scrollY) / (height)
//         var dy = RY - (ratio * (RY))
//         var dx = RX - (ratio * (RX))    
//         all.style.bottom = `${dy}px` // SO WE CAN HAVE JUST MOVEMENT IN Y-AXIS ONLY
//         if (ratio >= 0.5 && ratio <= 1.0) {
//             r = 1.0 - ratio
//             dy = RY - (r * RY) // SO THE BALL WILL STARTS FROM CENTER AND AS THE RATIO BECAME 0.5 THE BALL WIL MOVE BACK TOWARD THE TOP WITH CHANGING IN HORIZONTAL WIDTH
//             dx = RX - (r * RX)
//             all.style.bottom = `${dy}px`
//             all.style.right = `${dx}px`
//         }
//     });
// });


// window.addEventListener("load", function () {
//     const all = this.document.getElementsByClassName("ball-11")[0];
//     const AH = all.clientHeight;
//     const AW = all.clientWidth;
//     const RY = window.innerHeight - AH;
//     const RX = window.innerWidth - AW;
//     all.style.bottom = RY + "px"
//     all.style.right = (RX / 2) + "px"
//     window.addEventListener("scroll", function () {
//         const height = this.document.body.clientHeight - window.innerHeight;
//         const ratio = (window.scrollY) / (height)
//         var dy = RY - (ratio * RY)
//         var dx = RX - (ratio * RX)
//         all.style.top = `${dy}px`
//         if (ratio >= 0.5 && ratio <= 1.0) {
          
//             r = 1.0 - ratio
//             dy = RY - (r * RY) // SO THE BALL WILL STARTS FROM CENTER AND AS THE RATIO BECAME 0.5 THE BALL WIL MOVE BACK TOWARD THE TOP WITH CHANGING IN HORIZONTAL WIDTH
//             dx = RX - (r * RX)
//             all.style.top = `${dy}px`
//             all.style.right = `${dx}px`
            
//         }
//     })
// })