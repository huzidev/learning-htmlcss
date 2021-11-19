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


// IF ,ELSE OR ELSE IF
let age = 20;
if (age>18){
    console.log("you can go to the party");
}

else if (age < 10){
    alert("wht, youu good bro");
}

else{
    console.log("you cant");
}

//  remember the sequence it is if, else if then else otherwise it'll gave error

const cups = 45;

switch (cups) {
    case 4:
        console.log("the values of cups was 4");
        break;
    case 30:
        console.log("the values of cups was 4");
        break;
    case 45:
        console.log("the values of cups was 45");
        break;
}


//  we knew that strings was alphabet while numbers was integers
let employe = {
    name: "Huzi",
    code: "jade",
    hobby: "learning",
    age: 19,
}
console.log(employe);


// Array [] these was used to include strings, boolean and objects etc

let data = [`1,2,3,4,5,8,9,45,44,22, huzi is the developer of this web and , ${name} loves ${hobby}`];
console.log(data);
console.log(data.length);
data.push("pushed means sents the dat at the end");

var num = [0,2,9,3,4,6,7,2,8,4,1,];
var result = num.sort();
console.log(num);

let space = new Array(25);
console.log(space);

let name1 = "ali";
let name2 = "hassan";
let name3 = "sahil";

console.log(`${name} is a good boy and he loves ${hobby}`);
console.log(`${name1} is a good boy and he loves ${hobby}`);
console.log(`${name2} is a good boy and he loves ${hobby}`);
console.log(`${name3} is a good boy and he loves ${hobby}`);


// greeting by greet function
console.log("Greet functions");
// // function greet (name){
//     console.log(`${name} is a good boy and he loves ${hobby}`);
// }


// greet function is easier to operate because we just have to make a single greet function of specific information then just put the elements

let greetText = "Good Morning";
let advise = "continue the good spirit"
function greet (name, greetText, advise) {
    console.log(`${greetText} Hello, How r u ${name} i just get to know that you love ${hobby} and make sure you ${advise}`);
}

greet (name, greetText, advise);
greet (name1, greetText, advise);
greet (name2, greetText, advise);
greet (name3, greetText, advise);


// MAKE SURE WE USE RETURN AND THE NAME OF CLASS BECAUSE IF WE DIDN'T USE RETURN FOR CLASS INSIDE FUNCTION THEN IT WONT SHOW ANY ELEMNT IN CONSOLE

function summ(a,b,c,d,e){
    let f = a + b + c + d + e;
    return f; //CONOLSE WONT WORK AFTER THIS WE'VE TO MAKE A FUNCTION WITH {} THEN PUT RETURN AND WHATEVER CLASS WE WANT AND CONSOLE.LOG SHOULD'VE TO BE OUTSIDE FUNCTION {}
}
    let returnVal = summ (1,2,3,4,5); 
    console.log(returnVal);

// alert("you just entered the private web make sure you entered the right info...");

// PROMPT FUNCTION

// let info = prompt("What is yours name", "ANONYMOUS");

// WHAT PROMPT FUNCTION ACTUALLY DO IS THAT IT'LL MAEK A QUESTION LIKE STUFF LIKE AS I MENTIOED ABOVE (WHAT IS YOUR NAME) IS QUESTION AND (ANONYMOUS) IS KIND OF PLACE HOLDER 

// console.log(info);


// CONFRIM FUNCTIONS

// let deletePost = confirm ("you sure wanna delete that post?");
// console.log(deletePost);

// IF WE CLICK OK IT'LL SAYS TRUE IF WE CLICK CANCEL IT'LL SHOW FALSE

// deletePost IS THE NAME OF THE CLASS WE GAVE ABOVE THEREFORE WE PUT THE SAME CLASS IN (IF) CASE


// if (deletePost){
    // alert("Yours post has been deleted");
// }


// FOR ELSE WE DIDN'T HAVE TO PUT THE CLASS AGAIN


// else{
    // alert("yours post did not delete");
// }


// LOOPS
let i = 0;
for (i=0; i<6; i++){
    console.log(i)
}

// IF WE PUT i-- THEN IT'LL GO ON AND ON AND ON ADN ON...

// FOR EACH LOOPS
let friends = ["Huzi", "Ali", "Hassan", "Sahil"];


//     for (let index = 0; index < friends.length; index++) {
//         console.log(`hellos ${friends[index]} welcome it is for each loops`);
// };


// THIS IS FOR RACH LOOPS WE JUST MAKE AN ARRAY AND PUT ALL THE NAMES AND THEN JUST TYPE (FOR) THE VS STUDIO CODE WILL PROVIDE US BY DEFAILT CODES BY THIER OWN AND REPLACE WORD ARRAY WITH THE CLASS NAME WE GAVE BEFORE AN ARRAY


// EASIER WAY FOR EACH LOOPS

// friends.forEach(function f(element) {
//     console.log(`hello ${element} hope you guys were doing well, you know what this is a lot easier way to do do while loop and dont stop ${hobby} ${advise}`);
// })

// MAKE SURE YOU'LL BE CAREFULL WHILE MAKING FUNCTION F(ELEMNT POINT) JUST WRITE (FUNCTION) THEN VS CODE WILL SUGGEST YOU ONE FUNCTION JUST SELECT THAT SO VS CODE WILL GAVE YOU BUILTIN BRACKETS

// MORE EASIER WAY FOR EACH LOOPS

for (element of friends){
    console.log(`Hello ${element} continue ${hobby} and ${advise}`);
};

// IN THIS METHOD WHAT WE HAVE TO DO IS JUST THAT MADE A BRACKET AND WRITE DOWN (ELEMENT OF FRIENDS) AND RETURN ELEMENT BY PUTTING IT IN CONSOLE


// FOR EASIER MANIPULATION OF EMPLOYE'S DATA


for (key in employe){
    console.log(`The ${key} is ${employe[key]}`);
};


// REMEMBER INSIDE THE FUNCTION {} WE PUT (KEY) ON THE LEFT AND PROPERTIES AND DATA AT THE RIGHT SIDE THEREFORE INSIDE THE CONSOLE IT IS SHOWING (KEYS) AT THE FIRST SIGHT BECAUSE WE PUT KEY BEFORE ((EMPLOYE) OBJECT)


// MAKE SURE YOU PUT [KEY] INTO THE EMPLOYES OBJECTS AS SHOWN ABOVE LIKE ${employe[key]} OTHERWIS IT'LL SHOW AN ERROR


// INFINITE LOOP

let p = 0;
while ( p < 5 ) {  
    console.log(`${p} is less than 5`);
    p++;
}

// INFINITE LOOP WONT TAKE FALSE VALUES WHILE DO WHILE LOOP CAN TAKE THE FALSE VALUES

// MAKE SURE WHEN YOU CODE FOR INFINITE LOOPS PUT P++; TO STOP IT AT SPECIFIC POINT OTHERWISE IT'LL CREATE A PROBLEM


// DO WHILE LOOP

let k = 35;
do {
    console.log(`${k} is less than 30 but we are in do while loop`);
    k++;
}while ( k < 5 );

// MAIN DIFFERENCE BW (DO WHILE) LOOPS AND (INFINITE LOOP) IS THAT (DO WHILE LOOP) CAN TAKE FLASE VALUES AS WELL, MEANS IF WE SAYS THAT 5 IS GREATER (>) THAN 50 IT'LL SHOW THE RESULT IN CONSOLE BUT IN CASE OF (INFINITE LOOP) IT WONT SHOW THE RESULT IN THE CONSOLE BECAUSE INFINITE LOOP WONT TAKE FALSE OR WRONG VALUES


// ARROW FUNCTION


function hi() {
    console.log("Hello How R U");
}
hi(); //THIS HI IS BASICALLY THE NAME OF THE CLASS WE GAVE ABOVE AT FUNCTION


// WE CAN DO THE ABOVE THING IN ALOT EASIER WAY BY ARROW FUNCTION


// IF WE MAKE (FUNCTION HI() ) PROPERTY AGAIN THEN IT'LL GAVE ERROR THAT IT IS ALREADY PRESENT SO JUST DONT PUT FUNTION BEFORE (HI) JUST PUT (HI) ONLY REMEMBER (HI) IS JUST THE NAME OF THE CLASS

hi = () => {
    console.log("Arrow function");
}
hi(); // SAME AS ABOVE BUT IN A LOT EASIER WAY 


// TIMEOUT FUNCTION

// setTimeout(() => {
//     console.log("Hello, This Is Live")
// }, 2000);



let total = (a, b) => {
    return a + b;
};

total = (a, b) => a + b;


// SO WE ALREADY MENTIONED THE VALUE OF (A) AT THE STARTNG POINT THEREFORE IF WE TYPE HALF IN CONSOLE IT'LL SHOW 2.5 THE HALF OF 5


let half = a = a/2;
console.log(half);


// IF WE DIDN'T MAKE THE HALF FUNCTION THE VALUE CANT BE HALF EASILY 




// THIS GREET TEXT WHICH WE MADE BEFORE THIS FUNCTION ABOVE SOMEWHERE, WONT WORK INSIDE THIS FUNCTION BECAUSE WE'VE TO GAVE HIM HIS OWN GREET CLASS ETC

// AND NO MATTER WHAT CLASS WE GAVE HIM (INSIDE) THE FUNCTION BECUASE IT IS A KIND OF (SEPRATE WORLD) AND EVEN WE CAN GAVE THE CALSS OF SAME NAME WE'VE ALREADY GAVE ABOVE IT WONT SHOW ERROR THEREFORE HERE I GAVE IT (GREETTEXT) WHICH I ALREADY PUT ABOVE AND HERE WHAT GREETTEXT ACTUALLY EQUAL TO


console.log(greetText);
// GREET TEXT IS (GOOD MORNING) IN WRITTEN


let obj = {
    greetText: "Good Morning", // WE PUT COMMAS AFTER THE DATA INFORMATION INSIDE OBJECT
    names: ["Huzi", "Sahil", "Ali"], // BECAUSE IF WE PUT SEMI-COLONS (;) IT MEANS IT IS COMPLETED AT BLOCK LEVEL LIKE CONSOLE.LOG(); WE PUT THE SEMI-COLONS AFTER IT BECAUSE IT IS COMPLETED AT BLOCK LEVEL WHILE COMMAS IS FOR CONTINUES STEPS
        Speak(){
            this.names.forEach((student) => { 
            console.log(`${this.greetText} Hello, ${student} ${advise}`)
        });
    }
}
obj.Speak(); //THIS OBJECT.SPEAK IS A KIND OF RETURN OR CONSOLE AND SPEAK IS A KIND OF CLASS INSIDE THE OBJECT FUNCTION


// MATHS FUNCTION MAKE SURE WHEN YOU MAKE MATH FUNCTION SO MAKE (M) CAPITAL OF MATH SO IT CAN SHOW ALL OF THE FUNCTION RELATED TO MATH, EVEN VS CODE WILL SUGGEST YOU ONE

console.log("MATHS FUNCTIONS");
let m = Math;
console.log(m);

// LOOK WE PUT SEMI-COLONS AFTER CONSOLE BECAUSE IT IS COMPLETED AT BLOCK LEVEL, WE PUT COMMAS IF WE WANTED TO CONTINUE INSIDE A OBJECT

// alert(`you know what the value of sign (pi) is ${Math.PI} `);

// MAKE SURE YOU MAKE THE (M)  OF MATH CAPITAL AND PUT DOT (.) AFTER THE WORD MATH THEN THE PROPERTY OF MATHS FOR INSTANCE (Math.PI) WILL SHOWS YOU THE VALUE OF SIGN PI


// (Math.E) WILL GAVE YOU EULAR NUMBER
console.log(Math.E);


// THE VALUE OF A IS 5 BUT ABOVE SOMEWHERE WE MADE A FUNCTION A/2 (HALF) WHICH MAKES IT HALF 2.5


console.log(a);
console.log(b); // WE MADE B = -B THEREFORE (B) IS SHOWING AS -VE

console.log(`The Value Of a And b is ${a + b}`);
console.log(`The Value Of a And b is ${a - b}`);
console.log(`The Value Of a And b is ${a * b}`);
console.log(`The Value Of a And b is ${a / b}`);


// ROUNDING OFF

var o = 89.9;
var x = 77.2;
console.log(o, x);

// IT'LL JUST PRINT BOTH THE VALUES EXACTLY

console.log(`The value of O after rounding off is ${Math.round(o)} and that of X is ${Math.round(x)}`);

// POWER OFF

console.log(`3 raised to the power of 3 is ${Math.pow (3, 3)} is and 3 raised to the power of 2 is ${Math.pow (3, 2)} `);


// MAKE SURE YOU PUT THE VALUES FIRST WHOMS POWER YOU WANTED AND PUT THE NEXT VALUE AFTER COMMAS TO THE POWER YOU WANT


// SQUARE ROOT 

console.log(`Square root of 64 is ${Math.sqrt(64)}`);


// ROUND UP AND DOUND DOWN


console.log(`5.8 is rounded up to the nearest integer is ${Math.ceil (5.8)} and round down of 5.8 to the nearest integer is ${Math.floor (5.8)}`);

// FOR ROUND UP THE FUNCTION IS (Math.ceil) AND FOR ROUND DOWN THE FUNCTION IS (Math.floor)


// ABSOLUTE FUNCTION 

console.log(`The Absolute Value Of 5.666 is ${Math.abs (5.666)} it didn't shows any change because the value is already in +ve way buttt if we put the same value with -ve sign it'll show the absolute value, The absolute value of -5.666 is ${Math.abs (-5.666)} `);

console.log(`${Math.PI}`);
console.log(`The Value Of Sin(pi) is ${Math.sin (Math.PI)}`);
console.log(`The Value Of Sin(pi) is ${Math.tan (Math.PI)}`);
console.log(`The Value Of Sin(pi) is ${Math.cos (Math.PI)}`);
console.log(`${Math.PI/2}`);


let c  = 100;
let halff = c = c/2;
console.log(halff);


// MAXIMUM AND MINIMUM

console.log(`Maximum value in bw 4,5,3 is ${Math.max (4, 5, 3)} and Minimum value in bw 55, 66, 78, 2, 1, 0.000087, 0.0000000078 is ${Math.min (55, 66, 78, 2, 1, 0.000087, 0.0000000078 )}`);


// LOG VALUE OF ANY SPECIFIC NUMBER CAN BE FIGURED OUT BY FUNCTION (Math.log)
console.log(`${Math.log (55)}`);

// RANDOM NUMBERS

console.log(`${Math.random()}`); //BY THIS METHOD WE CAN ONLY GET RANDDOM NUMBERS IN BEWTEEN 0 FOR INSTANCE 0.11 0.99 0.24 ETC IN BRIEF THIS METHOD WILL ONLY PROVIDE US THE NUMBERS BETWEEN 0 TO 1 BY DEFAULT METHOD

// SPECIFIC RANDOM NUMBERS

var r = 0;
var n = 100;
let random = r + (n - r)*Math.random(); //THIS IS THE FORMULA
console.log(`the random number you got is ${random}`); 

// JSON

//  JSON IS USED TO STORE AND TRANSPORT DATA

let jsonObj = {  // THIS IS IN OBJECT FORM WE CAN EASILY MAKE IT STRING
    name: "Huzi",
    hobby: "learning",
    code: "JavaScript",
    age: 19,
}
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj); // THIS (jsonObj) IS BASICALLY THE NAME OF THE CLASS WE GAVE ABOVE WHEN ME MADE IT AS A OBJECT BUT NOW WE WANTED TO CHNAGE IT INTO THE STRING THEREFORE WE PUT .STRINGIFY AS WELL

console.log(myJsonStr); // (myJsonStr) IS JUST BASICALLY THE NAME OF CLASS WE MENTIONED TO MAKE IT STRING


// REPLACE FUNCTION
myJsonStr = myJsonStr.replace("Huzi", "Huzi-Dev");
console.log(myJsonStr);

greetText = greetText.replace("Good", "Gooooood");
console.log(greetText);

// THIS PARSE FUNCTION CAN MAKES YOURS STRING TO OBJECT AGAIN
myJsonStr = JSON.parse(myJsonStr);
console.log(myJsonStr);

// AND AS ABOVE CONVERTING OBJECT TO STRING IS BY (JSON.STRINGIFY) AND STRING TO OBJECT IS BY (JSON.PARSE) 


// WE KNOW THAT THIS FUNCTION (document.getelementbyid) IS USED TO DESIGN OR TO GET ELEMENT DIRECTLY FROM PUG/HTML INTO JS BUT ONLY IF WE USE THE COMMAND (.INNNERHTML) AFTER IT OTHERWISE IT'LL JUST PRINT THE FORMAT AS IN OF HTML EX: <div id="main-conatiner"></div> JUST LIKE THAT

let mainContainer = document.getElementById("main-container");
console.log(mainContainer);

let container = document.getElementsByClassName("containerr");
console.log(container);

// MAKE SURE YOU DONT USE DESH (-) IN BETWEEN THE WORDS IN CLASS NAMES IN JAVASCRIPT ONLY BECAUSE IT COULD CREATE SOME KIND OF ERROR

let sel = document.querySelector('.selector');
console.log("Return Selector", sel);


// BASICALLY WE CAN'T PUT AN ELEMENT OF HTML INTO JS JUST LIKE WE CAN ADD CLASS, OR ID BY DOCUMENT GET ELEMENT BY ID METHOD FROM HTML THEREFORE WE SELECT (QUERYSELCTOR)
let selector  = document.querySelector("ul");
console.log("Return Selector", selector);


// BY THIS METHOD (QuerySelectorAll) WE CAN SELECT ALL THE CHILD OF PARENT ELEMENT

let ParentChild = document.querySelectorAll("ul>li");
console.log("Return Selector", ParentChild);

// BY THIS METHOD WE CAN SELECT SPECIFIC CHILD OF PARENT ELEMENT

ParentChild[2].innerHTML = "This Is Changed";
console.log(ParentChild);


// TOGGLE FUNCTION JS HIDE/SHOW
document.getElementById("js-nav").innerHTML = `
    <div class="style">
        <div id="btn">
        </div>
        <div id="para">
            <p>
                So in this container we are going to make a toggle hide/show function in which you can hide the text just by clicking on it and make it re-appear just by clicking on it again
            </p>
        </div>
    </div>
`


function toggleHide() {
    let btn = document.getElementById("btn");
    let para = document.getElementById("para");
}