"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}!function(){function e(){var t=l[c].classList;c>=d&&(c=0);var s=l[c+1].classList;t.remove("active"),t.add("hide"),s.add("active"),s.remove("hide"),c++,setTimeout(function(){return e()},8e3)}function t(e,t){return t?(e.innerHTML=t,void(e.style.display="block")):(e.innerHTML="",void(e.style.display="none"))}function s(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6e3,a=document.getElementById("toaster");document.getElementById("toast-messsage").innerHTML=e,a.classList.add("active",t),clearTimeout(o),o=setTimeout(function(){return a.classList.remove("active",t)},s)}var a,n=!1,o=void 0,l=document.getElementsByClassName("quoted"),r=[],c=0,d=l.length-1,m={hello:!1,want:!1,best:!1,contact:!1},u=void 0;for(var g in l){var h=l[g].offsetHeight;h&&(r.push(h),0==g?l[g].classList.add("active"):l[g].classList.add("hide"))}r=Math.max.apply(Math,_toConsumableArray(r));document.getElementById("quote-base").style.height=r+"px",window.onload=function(){firebase.initializeApp({apiKey:"AIzaSyCuZwQuIqipfOjvAaQwjOl6PD9H_p9Bu2w",databaseURL:"https://hackerhgl-d82bd.firebaseio.com"}),firebase.database().ref("portfolio").once("value").then(function(e){for(var t=e.val(),s=0,a=t.length,o=0;o<a;o++)setTimeout(function(){var e=t[s],o='<div class="col-lg-4 col-sm-6 col-10 portfolio-item">';o+='<div class="text"><h3>'+e.name+"</h3><p>"+e.technologies.join(" / ")+'</p><a href="'+e.link+'" target="_black">',o+='<div class="button"><span>View</span><div class="button-bg"></div></div></a></div>',o+='<div class="bg" style="background: url('+e.image+')"></div>',o+="</div>",document.getElementById("portfolio-base").innerHTML+=o;var l=document.getElementsByClassName("portfolio-item")[s];l.style.height=l.clientWidth-l.clientWidth/5+"px",s===--a&&(n=!0),s++},400*o)})},e(),function(){var e=document.getElementById("character-base"),t=document.getElementById("character-desc");window.addEventListener("scroll",function(){var s=this;clearTimeout(u),u=setTimeout(function(){var a={hello:window.innerHeight-180};a.want=a.hello+document.getElementById("about").offsetHeight-100,a.best=a.want+document.getElementById("status").offsetHeight+document.getElementById("quotes").offsetHeight-140,a.contact=a.best+document.getElementById("portfolio").offsetHeight+700,s.scrollY>a.hello&&!m.hello?(m.hello=!0,t.innerHTML="Hello how are you ?",e.classList.add("hello"),t.classList.add("hello")):s.scrollY<a.hello&&m.hello&&(m.hello=!1,e.classList.remove("hello"),t.classList.remove("hello")),s.scrollY>a.want&&!m.want&&(m.want=!0,t.innerHTML="Are you looking for developer?",e.classList.add("want"),t.classList.add("want"),e.classList.remove("hello"),t.classList.remove("hello")),s.scrollY<a.want&&m.want&&(m.want=!1,t.innerHTML="Hello how are you ?",e.classList.remove("want"),t.classList.remove("want"),e.classList.add("hello"),t.classList.add("hello")),s.scrollY>a.best&&!m.best?(m.best=!0,t.innerHTML="Just look how good this guy is!!",e.classList.add("best"),t.classList.add("best"),e.classList.remove("want"),t.classList.remove("want")):s.scrollY<a.best&&m.best&&(m.best=!1,t.innerHTML="Are you looking for developer?",e.classList.remove("best"),t.classList.remove("best"),e.classList.add("want"),t.classList.add("want")),s.scrollY>a.contact&&!m.contact&&(m.contact=!0,t.innerHTML="Go contact him :P"),s.scrollY<a.contact&&m.contact&&(m.contact=!1,t.innerHTML="Just look how good this guy is!!"),s.scrollY<a.hello&&(e.classList.remove("hello"),t.classList.remove("hello"),e.classList.remove("best"),t.classList.remove("best"),e.classList.remove("want"),t.classList.remove("want"))},100)})}();var v={name:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){e=e.trim().replace(/  +/g," ");var s=document.getElementById("name_err");return e&&""!==e?e.length>35?(t(s,"Too long name!"),!1):e.match(/^[a-z\s]*$/i)?(t(s,null),e):(t(s,"Invalid Name"),!1):(t(s,"Input your name!"),!1)}),email:function(e){e=e.trim();var s=document.getElementById("email_err");return e&&""!==e?e.length<8||name.length>35?(t(s,"Invalid email length"),!1):e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(t(s,null),e):(t(s,"Invalid Email"),!1):(t(s,"Input your email"),!1)},message:function(e){e=e.trim().replace(/  +/g," ");var s=document.getElementById("message_err");return e&&""!==e?e.length>1e3?(t(s,"Message length should be under 100 characters"),!1):(t(s,null),e):(t(s,"Type your message"),!1)}};window.submit=function(){if(Lockr.get("limit")>1*new Date)return s("You need to wait for a minute to send message again","danger",15e3),!1;var e=v.name(document.getElementById("input_name").value),t=v.email(document.getElementById("input_email").value),a=v.message(document.getElementById("input_message").value);if(e&&t&&a){var n={name:e,email:t,message:a,date:1*new Date},o=firebase.database().ref("/messages").push().key;firebase.database().ref("/messages/"+o).set(n,function(e){var t=void 0,a=void 0;e?(t="Error while sending your message",a="danger"):(t="Your message is successfully sent",a="success"),s(t,a);var n=1*new Date+6e4;Lockr.set("limit",n)})}},window.toastclose=function(){document.getElementById("toaster").classList.remove("active")},window.onresize=function(){clearTimeout(a),a=setTimeout(function(){if(n){var e=document.getElementsByClassName("portfolio-item"),t=e[0].clientWidth;t-=t/5;var s=e.length;for(i=0;i<s;i++)e[i].style.height=t+"px"}},100)}}();