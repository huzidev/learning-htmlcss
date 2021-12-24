const input = document.querySelectorAll(".input");

function focus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
};