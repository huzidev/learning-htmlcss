// when HTML DOM is completely ready
$(document).ready(function () {
    $('h1').click(function () {
        window.alert("You've clicked on heading element")
    })
    $('.p-class').click(function () {
        window.alert("You've clicked on para which have class")
    })
    $('#p-id').click(function () {
        window.alert("You've clicked on para which have id")
    })
})