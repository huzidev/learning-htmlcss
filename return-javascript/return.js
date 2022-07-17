// we uses return when we wanted a value to be used at multiple places but we've to STORE that value in a VARIABLE
// just like we borrow some books from ours friends and asked him to return the books and ours friends is going
// to put the books (store) the books inside the bag

function sum(a, b) {
    let add = a + b;
    return add;
}

let bag = sum(10, 10);

console.log(`the sum of a and b is ${bag}`);

let addition = 10 + bag

console.log(addition);

// we uses return when wanted to use a value at multiple places but we've to store the value in a variable like we did here
// we store the values inside variable called bag