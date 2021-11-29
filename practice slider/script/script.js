let index = 1;
setInterval(function(){
    document.getElementById("radio" + index).checked = true;
    index++; // INCREMENT 
    if (index > 4 ) {
        index = 1;
    }
}, 3000);

let day = new Date();
day = document.getElementById("day").innerHTML = day;
console.log(day);