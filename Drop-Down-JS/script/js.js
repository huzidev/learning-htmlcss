const a_parent = document.querySelectorAll(".a_parent"); // ALL OF OURS ANCHOR TAG IS OF THIS CLASSs
const a_parent = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function (a_parent_item) {
    a_parent_item.addEventListener("click", function () {
        
        a_parent.forEach(function (a_parent_item) {
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})


a_parent.forEach(function (a_parent_item) {
    a_parent_item.addEventListener("click", function () {

        a_parent.forEach(function (a_parent_item) {
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})