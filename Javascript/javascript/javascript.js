console.log("Hello, Learing JS with Jade/Sass");


    // DOM with JS

let mainContainer = document.getElementById("main-container"); 
console.log(mainContainer);

    // WHILE USING VARIABLE LIKE (VAR/LET) MAKE SURE TO USE JUST ONE WORD AND NOT TO USE DESH (-) AFTER VARIABLES BCZ AN ERROR COULD OCCUR WHILE (" INSIDE SEMI-COLON USE AS YOU WANTED")

    // MAKE SURE TO PUT SEMI-COLON AT VERY END OBVIOUS WHILE USING JADE/SASS other wise an error would appear

let nav = document.getElementById("nav");
console.log(nav);   

let containers = document.getElementsByClassName("container");
console.log(containers);

// Selectors IN JS

let sel = document.querySelector('.container');
console.log("Return Selector", sel);

let sel1 = document.querySelector('#nav');
console.log("Return Selector", sel1);

let ParentChild = document.querySelector('#nav>li');
console.log("Return Selector", ParentChild);


// querySelectorAll by using (ALL) we can select all the (li) or element inside a specific div
let ParentChild1 = document.querySelectorAll('#nav>li');
console.log("Return Selector", ParentChild1);
// using var name we can target specific child of specific element
ParentChild1[4].innerHTML = "new button"
// counting zero say start hogi for JS 


// events for mouse TOGGLE SHOW/HIDE BTN
function toggleHide(){
    let btn = document.getElementById("btn");   
    let para = document.getElementById("para");
    if(para.style.display != "none"){
    para.style.display = "none";
    }
    else{
        para.style.display = "block";
    }
}


// Alert for mouse event listener
// let para = document.getElementById("para");
// para.addEventListener("mouseover", function run(){
//     console.log("cursor is in the border of para");
// });    

// para.addEventListener("mouseout", function run(){
//     console.log("Cursor went out of the para border");
// });

// whenever mouse went in or out of para border the message will pop-up, if we used alert then it'll pop-up in the form of modal like if we used console.log then it can be seen in the console