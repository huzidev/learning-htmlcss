console.log("learing JS")


// Adding Live Time By JS


function displayTime() {
    time = new Date();
    console.log(time);  
    document.getElementById("time").innerHTML = time;
}
setInterval(displayTime, 2000);