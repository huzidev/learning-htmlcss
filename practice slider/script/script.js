let index = 1;
setInterval(function(){
    document.getElementById("radio" + index).checked = true;
    index++; // INCREMENT 
    if (index > 4 ) {
        index = 1;
    }
}, 3000);


// var counter = 1;
// setInterval(function(){
//     document.getElementById("radio" + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1
//     }
// }, 2000);