let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let page = Math.ceil(product.length/4);
let index = 0;
let movePer = 25.34;
let maxMove = 203;

let mobile_view = window.matchMedia("(max-width: 1025px)")  // MAKE SURE TO USE THE SAME-WIDTH AS WE USE IN MEDIA QUERY 
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
    }
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