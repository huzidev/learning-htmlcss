// we uses callback function when we wanted function A to run first and function B to run after that just
// like we've created in ours DOM


const funcA = (friend, callback) => {
    console.log(`Hello i am talking to ${friend}, callback me later`);
    callback();
}

const funcB = () => {
    console.log("Hope that you are free now");
}

funcA("Huzi", funcB); // passing argument for calling function