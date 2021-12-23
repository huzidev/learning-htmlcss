const a_parent = document.querySelectorAll(".toggle"); // ALL OF OURS ANCHOR TAG IS OF THIS CLASSs
const dd_menu_a = document.querySelectorAll(".ToDo");

a_parent.forEach(function (a_parent_item) {
    a_parent_item.addEventListener("click", function () {
        a_parent_item.classList.toggle("active");
    });
});


dd_menu_a.forEach(function (dd_menu_a_item) {
    dd_menu_a_item.addEventListener("click", function () {
        dd_menu_a_item.classList.toggle("active");
    });
});