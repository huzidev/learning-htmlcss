const input = document.querySelectorAll(".input");

function focus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus"); // FOCUS MEANS THE WRITTEN USERNAME OR PASSWORD WILL MOVE -5PX WHEN WE CLICK ON THE INPUT ELEMENT
};

function blur() { // SO WHEN WE CLICK ANY OTHER THAN INPUT THE FOCUS WILL BE REMOVED
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
};

input.forEach(input =>{
    input.addEventListener("focus", focus)
    input.addEventListener("blur", blur)
})