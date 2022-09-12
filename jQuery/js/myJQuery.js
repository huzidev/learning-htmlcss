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

    $('.p-dbl').dblclick(function () {
        window.alert("You just double click on para")
    })

    $('#btn-fade').click(function () {
        $('#text-fade').fadeToggle(600)
    })
    
    $('#btn-slide').click(function () {
        $('#text-slide').slideToggle(600)
    })

    $('.conatiner').css({
        'font-family': 'sans-serif',
        'width': '1200px',
        'margin': 'auto',
        'border': '1px solid black',
        'padding': '10px'
    })
})