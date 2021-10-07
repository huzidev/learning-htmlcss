burger = document.querySelector('.burger')
navBar = document.querySelector('.nav-bar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-resp');
    navList.classList.toggle('v-resp');
    navBar.classList.toggle('v-resp');
})