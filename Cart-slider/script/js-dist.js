let span=document.getElementsByTagName("span"),product=document.getElementsByClassName("product"),page=Math.ceil(product.length/4),index=0,movePer=25.34,maxMove=203,mobile_view=window.matchMedia("(max-width: 1025px)");mobile_view.matches&&(movePer=50.36,maxMove=504);let right_mover=()=>{index+=movePer,1==product&&(index=0);for(const e of product)index>maxMove&&(index-=movePer),e.style.left="-"+index+"%"},left_mover=()=>{index-=movePer,index<0&&(index=0);for(const e of product)e.style.left="-"+index+"%"};span[1].onclick=()=>{right_mover()},span[0].onclick=()=>{left_mover()},console.log("Netflix-Slider");const sliders=document.querySelector(".carousel-box");var scrollPerClick,ImagePadding=20;showMovieData();var scrollAmount=0;function sliderScrollLeft(){sliders.scrollTo({top:0,left:scrollAmount-=scrollPerClick,behavior:"smooth"})}function sliderScrollRight(){scrollAmount<=sliders.scrollWidth-sliders.clientWidth&&sliders.scrollTo({top:0,left:scrollAmount+=scrollPerClick,behavior:"smooth"})}async function showMovieData(){var e=await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=0317152f6f8034165cc00d50c2c22694&sort_by=popularity.desc");(e=e.data.results).map((function(e,o){sliders.insertAdjacentHTML("beforeend",`<img class="img-${o} slider-img" src="https://image.tmdb.org/t/p/w185/${e.poster_path}" />`)})),scrollPerClick=document.querySelector(".img-1").clientWidth+ImagePadding}scrollAmount<0&&(scrollAmount=0),console.log("Animated Slider");var slider=document.querySelectorAll(".slide"),btns=document.querySelectorAll(".btn");let currentSlide=1;var manualNav=function(e){slider.forEach((e=>{e.classList.remove("active"),btns.forEach((e=>{e.classList.remove("active")}))})),slider[e].classList.add("active"),btns[e].classList.add("active")};btns.forEach(((e,o)=>{e.addEventListener("click",(()=>{manualNav(o)}))}));