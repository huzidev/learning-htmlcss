const menuIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
});


// Slider by JS

let index = 0;

window.onload = function () {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active");
    slide[index].classList.remove("remove");

    setInterval(() => {
        loops()
    }, 6000);
};

function loops() {
    const slide = document.getElementsByClassName("slide");
    slide[index].classList.add("active");
    slide[index].classList.remove("active");
    index++;
    if ( index == slide.length) {
        index = 0;
    }
    slide[index].classList.add("active");
    console.log(index, slide.length);
};



// DISPLAY CHARACTER
// let maxHeight = []; // !
// let scroll = {
//     hello: false,
//     want: false,
//     best: false,
//     contact: false
// };
let scrolltFix; //!


function character() { // MOST !!!
    let char = document.getElementById('character-base'); // BASE IS FOR IMG
    let desc = document.getElementById('character-desc'); // DESC IS THE DESCRIPTION
    window.addEventListener('scroll', function () {
        clearTimeout(scrolltFix);
        scrolltFix = setTimeout(() => {
            let cond = {
                hello: window.innerHeight-180
            };
            cond.want = cond.hello + document.getElementById('about').offsetHeight-100;
            cond.best = cond.want + document.getElementById('status').offsetHeight+240;
            cond.contact = cond.best + document.getElementById('portfolio').offsetHeight+700;
            if (this.scrollY > cond.hello && !scroll.hello) {
                scroll.hello = true;
                desc.innerHTML = "Hello how are you ?";
                char.classList.add('hello');
                desc.classList.add('hello');
            } else if (this.scrollY < cond.hello && scroll.hello) {
                scroll.hello = false;
                char.classList.remove('hello');
                desc.classList.remove('hello');
            }
            if (this.scrollY > cond.want && !scroll.want) {
                scroll.want = true;
                desc.innerHTML = "Are you looking for developer?";
                char.classList.add('want');
                desc.classList.add('want');
                char.classList.remove('hello');
                desc.classList.remove('hello');
            }
            if (this.scrollY < cond.want && scroll.want) {
                scroll.want = false;
                desc.innerHTML = "Hello how are you ?";
                char.classList.remove('want');
                desc.classList.remove('want');
                char.classList.add('hello');
                desc.classList.add('hello');
            }
            if (this.scrollY > cond.best && !scroll.best) {
                scroll.best = true;
                desc.innerHTML = "Just look how good this guy is!!";
                char.classList.add('best');
                desc.classList.add('best');
                char.classList.remove('want');
                desc.classList.remove('want');
            } else if (this.scrollY < cond.best && scroll.best) {
                scroll.best = false;
                desc.innerHTML = "Are you looking for developer?";
                char.classList.remove('best');
                desc.classList.remove('best');
                char.classList.add('want');
                desc.classList.add('want');
            }
            if (this.scrollY > cond.contact && !scroll.contact) {
                scroll.contact = true;
                desc.innerHTML = "Go contact him :P";
            }
            if (this.scrollY < cond.contact && scroll.contact) {
                scroll.contact = false;
                desc.innerHTML = "Just look how good this guy is!!";
            }
            if (this.scrollY < cond.hello) {
                char.classList.remove('hello');
                desc.classList.remove('hello');
                char.classList.remove('best');
                desc.classList.remove('best');
                char.classList.remove('want');
                desc.classList.remove('want');
            }
        }, 100); // THE TIME REQUIRED FOR THE CHARACTER TO SHOWN UP
    });
};
character();
