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

let a = 5;
console.log(a); 
let b = 5;
b = -b;
console.log(b);
console.log("The Sum oF A and B is equal to", +  (a + b));

let name = "Huzi";
console.log("The Name Of The Developer Is " + (name));

let sum = 10 + 50 + 60 -50 * 6 + 500;
console.log(sum);

let num1 = 150;
let num2 = 250;
console.log("The sum of num1 and num2 is equal to " + (num1 + num2));

let hobby = "learning";
console.log(`The name of the developer is ${name} and his hobby is ${hobby}`);

console.log("'if you want single inverted commas in console then put them inside double comma`'");
console.log('"if you want double inverted commas in console then put them inside single comma"');
console.log(`"hello" 'hi', if you wanted single and double commas at same time in console then put them in back-ticks `);

console.log(`${name} dev and hobby is ${hobby}`);

let length = name.length;
let len = hobby.length;
console.log(`length of the developer's name "${name}" is ${length} and his hobby which is "${hobby}" length's is ${len}`);

// /n funtion works as escape it just esp an line and starts the remaining strings or words from new line
console.log(`hello dev ${name} \n how r u`);


// by making it a (new string) function it'll show you all the features of elements like length etc
let y = new String (`hello, Mr ${name} nice to know that yours hobby is ${hobby}`);
console.log(y)