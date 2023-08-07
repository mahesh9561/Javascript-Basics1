// Primitive DataTypes - call by value
// 7-Types
// 1. String 
// 2. Number
// 3. Booleans
// 4. Undefined
// 5. Symbols
// 6. BigInt


// Non =-Premitive Datatyoes - Referance Type
// Array
// Objects
// Functions


// =================================================== //
// =================Memory========================
// stack (Primitive Memory)
// Heap (Non-Primitive) - Referance

let myName = "Mahesh Pathak";
let anotherName = myName;

anotherName = "Vivek Pathak";

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "mahesh@gmail.com",
    upi: "mahesh@ybl"
}

let userTwo = {
    email : "vivek@gmail.com",
    upi: "vivek@ybl"
}

userTwo = userOne;
userTwo.email = "xyz@gmail.com"

console.log(userOne);
console.log(userTwo);