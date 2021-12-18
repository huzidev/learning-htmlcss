let scrollfix;

function character() {
    let char = document.getElementById("character-base");
    let desc = document.getElementById("character-desc");
    window.addEventListener("scroll", function () {
       clearTimeout(scrollfix);
       scrollfix = setTimeout(() => {
           let cond = {hello: window.innerHeight - 180}; // INNERHEIGHT DOES INCLUDES ONLY PADDING NOTHING ELSE
           cond.looking = cond.hello + document.getElementById("about").offsetHeight - 100; // OFFSET HEIGHT INCLUDES VIEWABLE HEIGHT INCLUDES PADDING, BORDER & SCROLL-BAR BUT NOT THE MARGIN
           cond.skills = cond.looking + document.getElementById("status").offsetHeight + 240;  
           cond.contact = cond.skills + document.getElementById("portfolio").offsetHeight + 750;
           if ( this.scrollY > cond.hello && !scroll.hello) { // WE DONT USE (!) IN LESS-THAN (<) CONDITION
               scroll.hello = true; // MEANS NOW YOU'VE PERMISSION
               desc.innerHTML= "Hello, How Are You?"; // DESC IS BASICALLY THE VARIABLE WE GAVE ABOVE FOR (GET ELEMENT BY ID ) WITH CHARACTER & DESCRIPTION
               desc.classList.add("hello"); // SO WHEN THESE CLASSES WERE TRIGGERED THEN OURS RESPECTIVE CSS WILL WORK ON THEM
               char.classList.add("hello");
           } else if (this.scrollY < cond.hello && scroll.hello) { // REMEMBER WE DONT USE (!) IN LESS-THAN CONDITIONS
                scroll.hello = false;
                desc.classList.remove("hello");
                char.classList.remove("hello");
            }
            if (this.scrollY > cond.looking && !scroll.looking) {
                scroll.looking = true;
                desc.innerHTML = "Are You Looking For A Developer?";
                desc.classList.add("looking");
            }

       }, 100); 
    });
};
character();