window.onload = function() {
    const box = document.getElementsByClassName('ball')[0]; // THIS ZERO MEANS STARTING FROM ZERO LIKE WE USED IN SLIDER (INDEX = 0)
    window.addEventListener('scroll', function(e) {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth; // WE DIDN'T USED (- INNERWIDTH ) BECAUSE WE HAVEN'T ANY HORIZONTAL SCROLL 
        const scroll = window.scrollY; // BECAUSE WE WANTED ONLY VERTICAL SCROLL THEREFORE (SCROLLY)
        const ratio = (scroll / height); // SCROLL / HEIGHT BECAUSE WE JUST WANTED RESULT OF HEIGHT ACCORDING TO THE RESPECTIVE SCROLL
        const dy = ratio * window.innerHeight;
        const dx = ratio * width;
        console.log({scroll, height, width});
        console.log({dy, dx, ratio});
        box.style.top = `${dy}px`;
        box.style.left = `${dx}px`;
        // console.log(height, offset, box.clientHeight);
    });
}