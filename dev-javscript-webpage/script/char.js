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
                char.classList.add("looking");
                char.classList.remove("hello"); // THE ROTATION OF OURS CHARACTER IMG WILL NOT OVERCOME UNTIL WE REMOVED ("HELLO") CLASSES THERE AS WELL.
                desc.classList.remove("hello");
            }
            if (this.scrollY < cond.looking && scroll.looking) { // MEANS SCROLL WILL BECAME LESS THAN OURS ("LOOKING-CLASS") SO THIS MEANS THAT WE WERE GOING UP (TOWARDS) OURS (HELLO) CLASS SO WE'VE TO PUT (HELLO) CLASSES CONDITIONS ONCE AGAIN (BUTTTTTTTTTTTTTT) WHY WE DIDN'T APPLY THE SAME PROCEDURE ABOVE WHY DID WE USED (ELSE IF) CONDITIONS ABOVE BECAUSEEEEEE WE DIDN'T HAVE ANY EXTRA CLASS OR ANY OTHER CLASS ABOVE ("HELLO") CLASSES THEREFORE WE SAYS ELSE IF AND REMOVED ALL THE CLASSES
                scroll.looking = false;
                desc.innerHTML = "Hello, How Are You?";
                desc.classList.remove("looking");
                char.classList.remove("looking");
                desc.classList.add("hello"); // BECAUSE WE'VE HELLO CLASS ABOVE LOOKING CLASS SO WHEN WE WERE GOING ABOVE LOOKING CLASS WE'VE TO COMPULSORY (REPEAT) THE PROCEDURE AND TO ADD ALL THE CONDITIONS FOR (HELLO) CLASS
                char.classList.add("hello");
            }
            if (this.scrollY > cond.skills && !scroll.skills) {
                scroll.skills = true;
                desc.innerHTML = "Just Have A Glance! That How Skillful This Guy Is."
                desc.classList.add("skills");
                char.classList.add("skills");
                desc.classList.remove("looking");
                char.classList.remove("looking");
            }
            else if (this.scrollY < cond.skills && scroll.skills) { // WE USES ELSES IF THERE AS WELL BECAUSE WE'VE TWO CONDITIONS THERE ONE FOR SKILLS-SETS AND THE OTHER ONE IS FOR CONTACT
                scroll.skills = false;
                desc.innerHTML = "Are You Looking For A Developer?";
                desc.classList.remove("skills");
                char.classList.remove("skills");
                desc.classList.add("looking");
                char.classList.add("looking");
            }
            if (this.scrollY > cond.contact && !scroll.contact) {
                scroll.contact = true;
                desc.innerHTML = "Go Contact Him :P";
            }
            if (this.scrollY < cond.contact && scroll.contact) {
                this.scroll.contact = false;
            }

       }, 100); 
    });
};
character();