let scrollFix;

function character() {
    let desc = document.getElementById("character-desc");
    let char = document.getElementById("character-char");
    window.addEventListener("scroll", function () {
        clearTimeout(scrollFix);
        scrollFix = setTimeout(() => {
            let cond = {hello: window.innerHeight - 180};
            cond.hope = cond.hello + document.getElementById("about").offsetHeight - 100;
            cond.looking = cond.hope + document.getElementById("highlight").offsetHeight + 200;
            cond.skills = cond.looking + document.getElementById("skills").offsetHeight + 400;
            cond.contact = cond.skills + document.getElementById("work").offsetHeight + 700;
            if (this.scrollY > cond.hello && !scroll.hello) {
                scroll.hello = true;
                desc.innerHTML = "Hello, How Are You?";
                desc.classList.add("hello");
                char.classList.add("hello");
            }
            else if (this.scrollY < cond.hello && scroll.hello) {
                scroll.hello = false
                desc.classList.remove("hello");
                char.classList.remove("hello");
            }
            if (this.scrollY > cond.hope && !scroll.hope) {
                scroll.hope = true;
                desc.innerHTML = "Hope! You Were Fine";
                desc.classList.add("hope");
                char.classList.add("hope");
            }
            if (this.scrollY < cond.hope && scroll.hope) {
                scroll.hope = false;
                desc.innerHTML = "Hello, How Are You?";
                desc.classList.remove("hope");
                char.classList.remove("hope");
                desc.classList.add("hello");
                char.classList.add("hello");
            }
            if (this.scrollY > cond.looking && !scroll.looking) {
                scroll.looking = true;
                desc.innerHTML = "Are You Looking For A Developer?";
                desc.classList.add("looking");
                char.classList.add("looking");
            }
            if (this.scrollY < cond.looking && scroll.looking) {
                scroll.looking = false;
                desc.innerHTML = "Hope! You Were Fine";
                desc.classList.remove("looking");
                char.classList.remove("looking");
                desc.classList.add("hope");
                char.classList.add("hope");
            }
            if (this.scrollY > cond.skills && !scroll.skills) {
                scroll.skills = true;
            }
        }, 100);
    });
};
character();