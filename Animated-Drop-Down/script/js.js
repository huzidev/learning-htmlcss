const dropBtn = document.querySelector(".drop-btn");
const menuWrapper = document.querySelector(".wrapper");
const menuBar = document.querySelector(".menu-bar");
const settingDrop = document.querySelector(".setting-drop");
const helpDrop = document.querySelector(".help-drop");
const settingItem = document.querySelector(".setting-item");
const helpItem = document.querySelector(".help-item");
dropBtn.onclick = (()=>{
    menuWrapper.classList.toggle("active");

})
settingItem.onclick = (() => {
    menuBar.classList.toggle("active");

})