var btn = document.getElementById("btn");
var btn = document.getElementById("light");
function toggleBtn() { // BASICALLY TOGGLEBTN() IS THE FUNCTION OF OURS BUTTON TAG
    btn.classList.toggle("active"); // MEANS WHENEVER WE CLICKS THE BUTTON WHOSE ID IS (BTN) AS WE GAVE TO THE BUTTON ELEMENT THE CLASS LIST WILL BE ADDED NAME "ACTIVE"
    // REMEMBER TO USE TOGGLE NOT ADD BCZ TOGGLE MEANS WHENEVER WE TOGGLE(MEANS = CLICK OR NOT CLICK)
    light.classList.toggle("on");
};