console.log("Practice JavaScript");

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

let white = (`  Hello Mr ${name}   Hi`);
console.log(white);

white = white.trim();
console.log(white);