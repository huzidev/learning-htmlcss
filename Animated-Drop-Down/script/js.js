const dropBtn = document.querySelector(".drop-btn");
const menuWrapper = document.querySelector(".wrapper");
const settingDrop = document.querySelector(".setting-drop");
const menuBar = document.querySelector(".menu-bar");
dropBtn.onclick = (()=>{
    menuWrapper.classList.toggle("active");

})