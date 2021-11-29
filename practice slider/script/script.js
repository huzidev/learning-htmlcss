let index = 1;
setInterval(function(){
    document.getElementById(`${radio} + ${index}`).checked = true;
}, 2000);