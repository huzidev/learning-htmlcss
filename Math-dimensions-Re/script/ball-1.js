window.addEventListener("load", ()=> {
    const round = document.getElementsByClassName("ball-1")[0];
    const R = {h:  round.clientHeight, w: round.clientWidth };
    const final = {y:  (window.innerHeight - R.h), x: (window.innerWidth - R.w)};
    round.style.top = final.y+"px";
    round.style.right = final.x+"px";
    window.addEventListener("scroll", ()=>{
        

    })

})