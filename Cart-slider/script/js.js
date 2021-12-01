let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let page = Math.ceil(product.length/4);
let index = 0;
let movePer = 25.34;
let maxMove = 203;

let mobile_view = window.matchMedia("(max-width: 768px)")  // MAKE SURE TO USE THE SAME-WIDTH AS WE USE IN MEDIA QUERY 
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 504;
};

let right_mover = ()=>{
    index = index + movePer;
    if (product == 1) {
        index = 0;
    };
    for(const i of product)



}