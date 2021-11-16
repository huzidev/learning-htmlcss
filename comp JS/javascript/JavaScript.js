console.log("learing JS")


// Adding Live Time By JS

// Date & Time

    let day = new Date("2021-11-16")
    document.getElementById("day").innerHTML = day;    

    // function displayTime() {
    // let time = new Date();
    // console.log(time);  
    // document.getElementById("time").innerHTML = time;
    // }
    // setInterval(displayTime, 1000);

    document.getElementById("js").innerHTML =
     `
     <div class="container">
        <h3>Hello, We Were Styling This With Pure JS </h3>
        <p>using only js from there to style by <b>(getelemntbyId)</b> method</p>
    </div>
    <nav>   
        <div class="img-container">
            <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
            <img src="/assets/js.png" alt="JS Img" class="img">
        </div>
    </nav>
    <div class="boxes">
    <div class="box">
        <h2>
            Hello
        </h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At blanditiis commodi veniam omnis neque dolore nulla error saepe itaque repellendus?
        </p>
        <img src="/assets/Landscape.jfif" alt="JS Img" class="img">
    </div>
    <div class="box">
        <h2>
            Hello
        </h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At blanditiis commodi veniam omnis neque dolore nulla error saepe itaque repellendus?
        </p>
        <img src="/assets/linuuu.png" alt="JS Img" class="img">
    </div>
    <div class="box">
        <h2>
            Hello
        </h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At blanditiis commodi veniam omnis neque dolore nulla error saepe itaque repellendus?
        </p>
        <img src="/assets/linux.png" alt="JS Img" class="img">
    </div>
</div>
     `;









     console.log(
        "Hello hi ok"
    )
    // you can add multiple types of varaibales just put greet parameterss
    // greet from JS is Just By Default Greet If we didnt gave greetText To any of our specific varaiable
    
    function greet(names, greetText="Hello From JS"){
        console.log(greetText);
        console.log(names + " Is A Good Boy");
    }
    // We can also returrn the Integers and Strings also
    function sum(a,b,c){
        let d = a + b + c;
        return d;
    
    }
    let names = "Huzi";
    let name1 = "Logan";
    let name2 = "Sahil";
    let name3 = "Ali";
    let name4= "Haasan";   
    let greetText = "Good Morning Bro You Know What,";
    greet(names, greetText);
    greet(name1, greetText);
    greet(name2, greetText);
    greet(name3, greetText);
    greet(name4, );
    let returnVal = sum(1,5,3);
    console.log(returnVal);
    // This Can Be A Method But You Can Also Use One More Efficient And Fast Method
    // console.log(names + " is A Good Boy")
    // console.log(name2 + " is A Good Boy")
    // console.log(name3 + " is A Good Boy")
    // console.log(name4 + " is A Good Boy")
    
    
    // alert("You Just Visited To Ours Website ");  
    
    // let info = prompt("What Is Yours Name", "Anonymous");
    // // console.log(info);
    // if (info){
    //     console.log("Congratulaion, You Got The Access To The Web");
    // }
    // else{
    //     console.log("You Are Not Allowed To Visit This Web, Kindly Leave")
    // }
    
    
    // let deletePost = confirm("You Really Wanna Delete This Post");
    // // console.log(deletePost);
    
    // if(deletePost){
    //     console.log("You deleted this post");
    // }
    
    // else{
    //     console.log("This post isn't deleted ");
    // }
    
    
    // LOOPS
    
    console.log("Using Loops N")
    
    let i = 0;
    for(i=0; i<3; i++){
        console.log(i);
    }
    
    // Each Loops
    
    let friends = ["Huzi", "Ali", "Hassan", "Logan"];
        // for (let index = 0; index < friends.length; index++){
            // console.log ("Hello Boys, " + friends[index]);
            
        // }
    
        // for each loop
        // friends.forEach(function f(element) {
        //     console.log ("hello friends, " + element + " Welcome to the modern world")
    
        // });
    
        // For Of Loop Most Easiest Way loops
    
        for(Element of friends){
            console.log("Hello My Friend, " + Element + " Welcome To The Modern World" )
        }
    
    
    let data = {
        name : "HuziDev",
         hobby : "Learning",
         Age : 19
     }
     for (key in data){
         console.log(`the ${key} of person is ${data[key]}`);
     }
    
    
    //  infinite Loop will work so on and on and on utnil we put i++
     let z = 0;
     while(i<4){
         console.log(`${z} is less than 4`);
         i++;
     }
    
    //  Do While loop
     let x = 35;
     do{
         console.log(`${x} is less than 30 But We Are In Do While Loop`);
         x++;
     }while (x<30);
    
    
    
    console.log("Hello, Learing JS with Jade/Sass");
    
    
        // DOM with JS
    
    let mainContainer = document.getElementById("main-container"); 
    console.log(mainContainer);
    
        // WHILE USING VARIABLE LIKE (VAR/LET) MAKE SURE TO USE JUST ONE WORD AND NOT TO USE DESH (-) AFTER VARIABLES BCZ AN ERROR COULD OCCUR WHILE (" INSIDE SEMI-COLON USE AS YOU WANTED")
    
        // MAKE SURE TO PUT SEMI-COLON AT VERY END OBVIOUS WHILE USING JADE/SASS other wise an error would appear
    
    let nav = document.getElementById("nav");
    console.log(nav);   
    
    let containers = document.getElementsByClassName("container");
    console.log(containers);
    
    // Selectors IN JS
    
    let sel = document.querySelector('.container');
    console.log("Return Selector", sel);
    
    let sel1 = document.querySelector('#nav');
    console.log("Return Selector", sel1);
    
    let ParentChild = document.querySelector('#nav>li');
    console.log("Return Selector", ParentChild);
    
    
    // querySelectorAll by using (ALL) we can select all the (li) or element inside a specific div
    let ParentChild1 = document.querySelectorAll('#nav>li');
    console.log("Return Selector", ParentChild1);
    // using var name we can target specific child of specific element
    ParentChild1[4].innerHTML = "new button"
    // counting zero say start hogi for JS 
    
    
    // events for mouse TOGGLE SHOW/HIDE BTN
    function toggleHide(){
        let btn = document.getElementById("btn");   
        let para = document.getElementById("para");
        if(para.style.display != "none"){
        para.style.display = "none";
        }
        else{
            para.style.display = "block";
        }
    }
    
    
    // Alert for mouse event listener
    // let para = document.getElementById("para");
    // para.addEventListener("mouseover", function run(){
    //     console.log("cursor is in the border of para");
    // });    
    
    // para.addEventListener("mouseout", function run(){
    //     console.log("Cursor went out of the para border");
    // });
    
    // whenever mouse went in or out of para border the message will pop-up, if we used alert then it'll pop-up in the form of modal like if we used console.log then it can be seen in the console
    
    
    // Set timeout/ Clear timeout
    
    
    console.log("Hello, adding set timeout and clear timeout function");
    
    function greet(name, byetext){
        console.log("Hello, Welcome Back" + name + " " + byetext);
    }
    // setTimeout(greet, 2000, " HUZI-DEV", "Good Night");
    
    
    // setInterval(greet, 1000, " HUZI-DEV", "Good Night");
    
    
    // adding live time
    
    function displayTime() {
        time = new Date();
        console.log(time);
        document.getElementById("time").innerHTML = time;
    }
    setInterval(displayTime, 1000);
    
    
    // date and time
    console.log("DATE AND TIME BY JS");
    let now = new Date();
    console.log(now);
    
    console.log("Specific Date & Time");
    let date = new Date("2021-10-26");
    console.log(date);
    // make sure to put double commas in specific date situtation
    
    console.log("Refrence Date");
    let refrence = new Date(0);
    console.log(refrence);
    
    
    console.log("hello welcome back")
    