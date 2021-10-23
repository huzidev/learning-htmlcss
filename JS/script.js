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


alert("You Just Visited To Ours Website ")