console.log("learing JS")
// MAKE SURE YOU USES LET WITH A SPECIFIC WORD DONT USE LET = A 5; BECAUSE WHILE CODING PROFESSIONALLY DEVELOPERS USED LET WITH A SPECIFIC WORD SO THEY COULD DEBUGGGED IT EASILY LATER

console.log("MAKE SURE YOU USES LET WITH A SPECIFIC WORD DONT USE LET = A 5; BECAUSE WHILE CODING PROFESSIONALLY DEVELOPERS USED LET WITH A SPECIFIC WORD SO THEY COULD DEBUGGGED IT EASILY LATER");


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
let y = new String (`hello, Mr ${name} nice to know that yours hobby is ${hobby} `);
let long = y.length;
console.log(y)
console.log(`over all the lentgh of the (new string) function is ${long}`);

//  Creating form by js function (getelemntbyid)

document.getElementById("form").innerHTML = `
    <div class="info">
        <form action="">
            <input type="name" name="name" placeholder="Write yours name">
            <input type="email" name="email"  placeholder="Write yours email">
            <input type="password" name="password"  placeholder="Write yours password">
            <button class="btn">Submit</button>
        </form>
    </div>
`;  

//  ocuurence of index, means which word is where 

let position = name.indexOf ("h");
console.log(position);

//  if we put let before position at there it'll gave error because js wil think that we were making another let (variables, a kind of div in js)
let str = " this is string whoms occurence i wanna know";
position = str.indexOf("w");
console.log(`the positon of word whoms's (W) in the above sentence is at`); 
console.log(position);

// now (i) word is repeating in the above sentence so if we type the command of (indexOf) it'll show the position of satrting (i)
position = str.indexOf("i");
console.log(position);

//  we've to use (LastindexOf) if we wanted to know the positon of last (i)

//  NOTE index means counting starts from ZERO
position = str.lastIndexOf("i");
console.log(position);


// str.slice and str.substing both works same they just show the values in (BW THE NUMBERS) you select while removed the rest
//  but slice can take the -ve values as well but str/substing dont easy way to learn is that slice can be attacked by fungus which is -ve event
position = str.slice(1, 32);
console.log(position)

position = str.substring(1, 20);
console.log(position);


console.log("The real sentence is that below");
console.log(str);

// str.replace will replace a specific word or sentence 
console.log("The sentence after replacement is that below");
let replace = str.replace ("string", "the sentence");
console.log(str.toLowerCase());
console.log(replace, str.toUpperCase());


// to remove extra space we just have to put .trim() it'll reomve extra spaces from just start and end
let extra = "    this   do contain some extra    spaces";
console.log(extra);
console.log(extra.trim());

// (charAt) will tell us what is the exact word at positon you entered
let code = str.charAt(1);
console.log(code);
// char code will tell you the code of any word 
code = str.charCodeAt(1);
console.log(code)

//  we use const if we dont wanted to change any of the strngs, obj, data because we know that if we uses
//  let a = 5; then we use a = 10; then console.log(a)  the figure will be changed to 10 but in the case of const it wont chnage althoug it'll gave error
const z = "this sentence is constant";
console.log(z);
//  we specifically used const for the summary of whole coding