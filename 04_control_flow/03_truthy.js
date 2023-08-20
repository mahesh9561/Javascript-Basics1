const userEmail = "mahesh@gmail.com";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user Email");
}

// falsy Values - 
// False, 0, -0, BigINt 0n, "", null, undefined, NaN;

// Truthy Value
// true, '0', 'false', " ", [], {}, function(){}

// ---------------------------------------------------
// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
let val2 = null ?? 10;

console.log(val1);
console.log(val2);

// ------------------Terniary Operator------------------
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80")