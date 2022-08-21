burger = document.querySelector('.burger')
navBar = document.querySelector('.nav-bar')
items = document.querySelector('.items')
item = document.querySelector('.item')



burger.addEventListener('click', ()=>{
    item.classList.toggle('item');
    items.classList.toggle('items');
    navBar.classList.toggle('nav-bar');
})