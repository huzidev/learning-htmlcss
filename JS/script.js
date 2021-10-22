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


//  infinite Loop
 let z = 0;
 while(i<4){
     console.log(`${z} is less than 4`);
 }