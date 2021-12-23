const dropBtn = document.querySelector(".drop-btn");
const menuWrapper = document.querySelector(".wrapper");
const menuBar = document.querySelector(".menu-bar");
const settingDrop = document.querySelector(".setting-drop");
const helpDrop = document.querySelector(".help-drop");
const settingItem = document.querySelector(".setting-item");
const helpItem = document.querySelector(".help-item");
const backSettingBtn = document.querySelector(".back-setting-btn");
const backHelpBtn = document.querySelector(".back-help-btn");
dropBtn.onclick = (()=>{
    menuWrapper.classList.toggle("active");
})
settingItem.onclick = (() => {
    menuBar.style.marginLeft = "-400px";
    setTimeout(() => {
       settingDrop.style.display = "block" 
    }, 100);
})
helpItem.onclick = (() => {
    menuBar.style.marginLeft = "-400px";
    setTimeout(() => {
        helpDrop.style.display = "block"
    }, 100);
})
backSettingBtn.onclick = (() => {
    menuBar.style.marginLeft = "0px";
    settingDrop.style.display = "none";
})
backHelpBtn.onclick = (() => {
    menuBar.style.marginLeft = "0px";
    helpDrop.style.display = "none";
})