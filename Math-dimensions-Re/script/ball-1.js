window.addEventListener("load", ()=> {
    const round = document.getElementsByClassName("ball-1")[0];
    // const R = {h:  round.clientHeight, w: round.clientWidth };

    
    const Rheight = round.clientHeight // MEANS HEIGHT OF OURS DIV
    const Rwidth = round.clientWidth // MEANS WIDTH OF OURS DIV


    // const Rheight = 100 // MEANS EXACT HEIGHT OF OURS DIV
    // const Rwidth = 100 // MEANS EXACT WIDTH OF OURS DIV


    const finalY = (window.innerHeight - Rheight)
    const finalX = (window.innerWidth - Rwidth)
    round.style.top = finalY+"px";
    round.style.right = finalX+"px";
    window.addEventListener("scroll", ()=>{
        // const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        // const scroll = window.scrollY

        const ratio = (window.scrollY) / (2000 - window.innerHeight)// BUT NOT IN EVERY CASES WE KNOWS EXACT HEIGHT OF THE BODY CONTENT BUT WE CAN FIND THE EXACT HEIGHT OF BODY CONTENT

        // const ratio = (window.scrollY) / (document.body.clientHeight - window.innerHeight)
        const dy = finalY - (ratio * window.innerHeight);
        const dx = finalX - (ratio * window.innerWidth);
        round.style.top = `${dy}px`
        round.style.right = `${dx}px`
    })

})