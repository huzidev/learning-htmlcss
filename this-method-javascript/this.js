// by default if we uses console.log(this) so this will points towards global object which is window
// this basically used for pointing at anything in (PARENT'S) object
// everything in javascript is object


const data = {
    name : "Huzi",
    age : 20,
    // creating method
    sum : function () { // we can't use arrow function when we are using (this.)
        console.log(2+2);
        console.log(this.name); // parent of sum is data and inside data we've name and age therefore we can print that by using 
        console.log(this.age); // this.name or this.age
    }
}

// calling the function sum 
// data is not function inside data we've a method called sum which have a function
data.sum();