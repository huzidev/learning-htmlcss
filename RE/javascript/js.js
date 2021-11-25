console.log("Practice JavaScript");


document.getElementById("js").innerHTML = `
<style>
* {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
  }
  
  #js {
    background-color: black;
    color: white;
    margin: 20px auto;
    -webkit-box-shadow: 0px 0px 15px -5px black;
            box-shadow: 0px 0px 15px -5px black;
    border-radius: 9px;
    padding: 20px 90px;
    width: 1200px;
  }
  
  #js h1 {
    margin: 20px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  
  #js p {
    margin-bottom: 20px;
  }
  
  #js .same {
    padding: 5px 20px;
  }
  #js .input{
      padding: 2px 20px;
      height: 20px;
      width: 200px;
  }
  #js input {
    margin-left: 20px;
  }
  
  button {
    cursor: pointer;
  }
</style>
<div>
    <h1>
        Fill Up The Following Tabs
    </h1>
    <p class="same">
      Write down any one of them in the bar <br>
      apple, banana, pineapple, burger, pizza
    </p>  
    <input type="text" name="text" id="myFruits" class="same">
    <button onclick="myFunction()" class="same">
        Submit
    </button>
    <p id="result" class="same">
    
    </p>
</div>


    <div id="form">
        <h1>
             Dev-Huzi <br>
            Add Yours Info
        </h1>
        <p class="same">
            You can have the acces of the web only if you were Dev-Huzi
        </p>
        <input type="text" id="dev" class="same input" placeholder="Yours Name, Age Or Secret Code">
        <button onclick="runFunction()">Submit My Info</button>
        <p id="dev-result" class="same">

        </p>
    </div>
`

// INITIATE CODING IN JS

var a = 5;
var b = -25;
console.log(a);
console.log(b);
console.log("The Sum Of a & b is " + (a + b));

let name = "Huzi";
let hobby = "Learning";
let code = "JavsScript";
let advise = "Keep The Good Spirit"
console.log(`The name of the developer is ${name} and he's coding in ${code} and his hobby is ${hobby}`)

let sum = 5 + 5 + 9 * 9 * 9 / 50 * 100 + 30;
console.log(sum);

let num1 = 500;
let num2 = 200;
console.log("The Value Of Num1 is " + num1); //WE'VE TO PUT PLUS SIGN IF WE WERE USING TWO FACTORS INSIDE A CONSOLE
console.log("The Value Of Num2 Is " + num2 );
console.log("The sum of Num1 & Num2 is equal to " + (num1 + num2));

console.log(`The length of developer's name is ${name.length} and his hobby which is ${hobby} and the lentgh of that word is ${hobby.length} and ${advise}`);

console.log(`Hello Dev-${name} \n How r u`);

let str = new String (`Mr ${name} yours ${code} coding is Great ${advise}`);
console.log(str);

console.log(`Overall the length of ours new-string is ` + str.length);

let p = str.indexOf("H");
console.log("The positon of Word (H) in the above string is at " + p);


p = str.slice(0, 25);
console.log(p);

p = str.substr(-25);
console.log(p);

let words = (`Hello, Mr ${name} yours ${code} is Great`);
console.log(words);

words = words.toUpperCase();
console.log(words);

words =  words.toLowerCase();
console.log(words);

let white = (`  Hello Mr ${name}   Hi        `);
console.log(white);

white = white.trim();
console.log(white);

white = white.indexOf("M");
console.log(`The index (positon) of word (M) is at ` + white);

const c =  ("This sentnce is constant");
console.log(c);


console.log("Age 20 can he ride bike?");
let age = 20;
if (age>18){
    console.log("You can ride motorBike");
}

else if (age < 10){
    console.log("You Go And write bicyle ");
}

else{
    console.log("You can't ride bike");
}


console.log("Age 15 can he ride bike?");
age = 15;
if (age > 18){
    console.log("You an ride bike");
    
}

else if (age > 10){
    console.log("You can ride Bicycle");
}

else{
    console.log("You good Bro");
}


console.log("Age is 5 can he ride bike?");
age = 5;
if (age > 18){
    console.log("You can ride the bike");
}

else if (age > 10){
    console.log("You can ride bicylce");
}

else{
    console.log("You Gooood Bro???");
}

const cups = 50;

switch (cups) {
    case 5:
        console.log("The Value of cups were 5");
        break;

    case 20:
        console.log("The value of cups were 20");
        break;
    case 50:
        console.log("The values of cups were 50");
        break;
}

// let message = ("Day In switch function");
// message = message.toUpperCase();
// console.log(message);

// const day = "today";
// switch (day) {
//     case "today":
//         console.log("The day is Monday")
//         break;

//     default:
//         break;
// }


function myFunction() { // MYFUNCTION() IS GIVEN TO OURS BUTTON
    let fruits = document.getElementById("myFruits").value; // WITHOUT THAT (.VALUE) FUNCTIONS WONT WORK & (ID NAME MYFRUITS) IS GIVEN TO INPUT BAR ANDDDDD DONT PUT 
    //(.INNERHTML) THERE BECAUSE IF YOU DO SO JAVASCRIPT WILL CONFUSE AND TRIED TO RUN AN INNER FUNCTION
    switch (fruits) {
        case "apple":
            text = "An Apple A Day Keeps Doctor Away";
            alert("An Apple A Day Keeps Doctor Away");
            break;
        case "banana":
            text = "Banana helps you to gain stamina & strengthen you";
            alert("Banana helps you to gain stamina & strengthen you");
            break;
        case "pineapple":
            text = "pineaplle is good";
            alert("pineaplle is good");
            break;
        case "burger":
            text = "burger is not good for health";
            alert("burger is not good for health");
            break;
        case "pizza":
            text = "Pizza will makes you Fat";
            alert("Pizza will makes you Fat");
            break;
        default:
        text = "Sorry I dont know about that";
        alert("Sorry I dont know about that");
        
    }
document.getElementById("result").innerHTML = text;
}


function runFunction() {
    let info = document.getElementById("dev").value;  
    switch (info) {
        case "Huzi":
            text = "Congratulation... You Are The Developer";
            break;
        case "nineteen":
            text = "Yes Yours Age Is Also Correct";
            break;
        case "Boom Boom":
            text = "Secret Code Is Correct";
            break;
        default:
            text = "The information you provide was completely wrong";
    }

document.getElementById("dev-result").innerHTML = text;
};


console.log("OBJECT FUNCTION");
let data = {
    name: "Huzi",
    code: "JavaScript",
    hobby: "Learning",
    age: 19,
}
console.log(data);


console.log("OBJECT MESSAGE");

data = (`The name of the developer is ${name}`);
console.log(data);
console.log(`The length of data object messaage is ` + data.length); 




console.log("ARRAY FUNCTION");
let array = [name= "Huzi", Hobby= "Learning",  Code="JavaScript", Age= "19"];
console.log(array);
console.log(`The length of whole (ARRAY) FUNCTION is ` + array.length);


console.log("ARRAY MESSAGE");

let dev = [`The name of the developer is ${name} and he love ${hobby} and he codes in ${code} and he should've to continue the work and ${advise}`];
console.log(dev);


console.log(`The length of array message is just ` + (dev.length) + ` because it is just a single mesaage in a single array function`);



let sort = ("sort function");
console.log(sort.toUpperCase());


console.log(`INTEGERS ARE NUMBERS AND THEY SHOULD NOT HAVE TO BE IN COMMA`);
let random = [1, 5, 9, 6, 0, 3, 7, 6, 3, 0, 1, 3];
console.log(random.sort());

random = ["banana", "apple", "juice", "pomegrant", "pizza", "burger"];
console.log(random.sort());


console.log("Opposite Of Sort");
console.log(random.reverse());

let empty = new Array(20);
console.log(empty);


console.log(name);

let name1 = "Sahil";
let name2 = "Ali";
let greet = "Hello";
let greetText = "Good Morning";

console.log(`${greet} ${greetText}, ${name} is a good developer and he writes in ${code}`);
console.log(`${greet} ${greetText}, ${name1} is a good developer and he writes in ${code}`);
console.log(`${greet} ${greetText}, ${name2} is a good developer and he writes in ${code}`);

console.log("Greet Function");
function meet(name) {
    console.log(`${name} is the developer and he loves ${hobby}`);
};

// MAKE SURE TO WEITE THEM AFTER SO WE CAN RETURN THE FUNCTION
meet(name);
meet(name1);
meet(name2);


let z = ("Greet Function In Easier Way");
console.log(z.toUpperCase());

function intro(name, greetText, code) {
    console.log(`${greetText} ${greet} Mr. ${name} how r u, I heard that you write code in ${code} it's good to kmow that and ${advise}`);
};

intro(name, greetText, code);
intro(name1, greetText, code);
intro(name2, greetText, code);

let value = "Maths Values & Functions";
console.log(value.toUpperCase());

function summ(a,b,c,d,e,f){
    var g = a + b + c + d + e + f;
    return g;   
};

let returnVal = summ(5,5,5,5,5,5);
console.log(returnVal);

function hi(){
    console.log(`${greetText} ${greet} ${name}`);

};
hi();


let info = "Arrow Function";
console.log(info.toUpperCase());

hi = () => {
    console.log(`${greetText} ${name} ${advise}`);
};
hi();


info = "Live Function By Timeout";
console.log(info.toUpperCase());
// setTimeout(() => {
//     console.log(`${greetText} ${name} This Is Live Function This Is (SETTIMEOUT) Function Therefore It Is Repeating After Every 2 Seconds`);
// }, 2000);




let total = (a, b) => {
    return a + b;
};
total = (a, b) => a + b;
console.log(total(a, b));
console.log("The above result is accurate because a is equal to " + a + " and the value of b is " + b);

var d = 50;
console.log(d);

total = (a, b, d) => a - b * d;
console.log(total(a, b, d));

total = (a, b) => a * b;
console.log(total(a, b));

total = (a, b) => a / b;
console.log(total(a, b));

let half = a = a/2;
console.log(half);

let double = a = a*2;
console.log(double);

double = a = a*5;
console.log(double);


info = "Speak Function";
console.log(info.toUpperCase());

let obj = {
    names: ["Huzi", "Sahil", "Ali", "Logan"],
        speak(){
            this.names.forEach(student => {
                console.log(`${greetText}, ${greet} ${student} i heard that you codes in ${code} its good to know that and ${advise}`);
            });
        }

}
obj.speak();

console.log(`\n`);

info = "Way To Create Object, Array And Strings";
console.log(info.toUpperCase());
let see = {
    name: "logan",
    hobby: "boxing",
};
console.log(see);

see = Array(name = "Logan");
console.log(see);

see = new String("Logan");
console.log(see);


info = "maths function";
console.log(info.toUpperCase());

let m = Math;
console.log(m);

m = Math.E;
console.log(m);

m = Math.PI;
console.log(m);

console.log(`The Value Of a & b is after sum is ` + (a + b));
console.log(`The Value Of a & b is after multiplication is ` + (a * b));
console.log(`The Value Of a & b is after divide is ` + (a / b));
console.log(`The Value Of a & b is after substraction is ` + (a - b));


 total = (a, b) => a * b;
 console.log(total(a, b));


info = "Roundig off function";
 var r = 89.9;
 var o = 77.2;  