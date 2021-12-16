window.onload = function(e) {
    const box = document.getElementsByClassName('ball')[0]; // THIS ZERO MEANS STARTING FROM ZERO LIKE WE USED IN SLIDER (INDEX = 0)
    window.addEventListener('scroll', function(e) {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth; // WE DIDN'T USED (- INNERWIDTH ) BECAUSE WE HAVEN'T ANY HORIZONTAL SCROLL 
        const scroll = window.scrollY; // BECAUSE WE WANTED ONLY VERTICAL SCROLL THEREFORE (SCROLLY)
        const ratio = (scroll / height); // SCROLL / HEIGHT BECAUSE WE JUST WANTED RESULT OF HEIGHT ACCORDING TO THE RESPECTIVE SCROLL
        const dy = ratio * window.innerHeight; // RATIO WHICH IS EQUAL TO (SCROLL/HEIGHT ) AS WE MENTIONED AND WE MULTIPLY BY INNERHEIGHT BECAUSE WE USED CLIENTHEIGHT - WINDOW.INNERHEIGHT
        const dx = ratio * width;
        console.log({scroll, height, width});
        console.log({dy, dx, ratio});
        box.style.top = `${dy}px`; // SO WE CAN STYLE OURS WEBSITE JUST LIKE CSS BY USING (.STYLE.) AS WE DID THERE SINCE (BOX) IS THE NAME OF OURS CLASS WE USED ABOVE THEREFORE WE USES (BOX.STYLE.) WE CAN ALSO GAVE IT SOME MARGIN, PADDING OR ANY OTHER PROPERTY JUST BY USING THIS FUNCTION
        box.style.left = `${dx}px`;
        // console.log(height, offset, box.clientHeight);
    });
};