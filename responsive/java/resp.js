burger = document.querySelector('.burger')
nav-bar = document.querySelector('.nav-bar')
nav-list = document.querySelector('.nav-list')
right-nav = document.querySelector('.right-nav')



burger.addEventListener('click', ()=>{
    right-nav.classList.toggle('v-resp');
    nav-list.classList.toggle('v-resp');
    nav-bar.classList.toggle('h-nav-resp');
})