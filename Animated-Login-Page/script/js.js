const input = document.querySelectorAll(".input");

function focus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
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