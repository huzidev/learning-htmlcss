const dropBtn = document.querySelector(".drop-btn");
const menuWrapper = document.querySelector(".wrapper");
dropBtn.onclick = (()=>{
    menuWrapper.classList.toggle("active");

})