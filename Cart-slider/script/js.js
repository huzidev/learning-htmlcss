let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let page = Math.ceil(product.length/4);
let index = 0;
let movePer = 25.34;
let maxMove = 203;

let mobile_view = window.matchMedia("(max-width: 1025px)"); // MAKE SURE TO USE THE SAME-WIDTH AS WE USE IN MEDIA QUERY 
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 504;
};

let right_mover = ()=>{
    index = index + movePer;
    if (product == 1) {
        index = 0;
    };
    for(const i of product){
        if (index > maxMove) {
            index = index - movePer;
        };
        i.style.left = "-" + index + "%";
    };
};

let left_mover = ()=> {
    index = index - movePer;
    if (index < 0) {
        index = 0;
    };
    for (const i of product) {
        if (page > 1) {
        };  // WE DONT HAVE TO PUT INDEX = INDEX - MOVEPAR OR + MOVEPAR BECAUSE WE ARE MAKING MOVE LEFT FUNCTION
        i.style.left = "-" + index + "%";
    };
};


span[1].onclick = ()=>{
    right_mover();  
};  
span[0].onclick = () => {
    left_mover();
};


console.log("Netflix-Slider");

const sliders = document.querySelector(".carousel-box");
var scrollPerClick;
var ImagePadding = 20;

showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });
};
if (scrollAmount < 0) {
    scrollAmount = 0;
};

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        });
    };
};




async function showMovieData() {
    const apiKey = "0317152f6f8034165cc00d50c2c22694";
    
    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" 
        + apiKey +
        "&sort_by=popularity.desc"
    );
result = result.data.results;

result.map(function (cur,index) {
    sliders.insertAdjacentHTML(
        "beforeend",
        `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
});
    scrollPerClick = document.querySelector(".img-1").clientWidth + ImagePadding; 
};

console.log("Animated Slider");

var slider = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

var manualNav = function(manual) {
    slider.forEach((slide) =>{
        slide.classList.remove("active");

        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
    });
    slider[manual].classList.add("active");
    btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


var repeat =  function (activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
        slider[i].classList.add("active");
        slider[i].classList.add("active");
        i++;

        if (slider.length == i) {
            i = 0;
        }
            
        }, timeout);
    }
}