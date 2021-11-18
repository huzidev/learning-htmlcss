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
