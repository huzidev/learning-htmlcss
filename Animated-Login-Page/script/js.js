const input = document.querySelectorAll(".input");

function focus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
};

input.forEach(input =>{
    input.addEventListener("focus", focus)

})