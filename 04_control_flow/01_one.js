const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); - error

const balance = 1000;
if(balance > 500) console.log("Test");

if (balance < 500) {
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 700");
}else if (balance < 900) {
    console.log("less than 900");
}else{
    console.log("less than 1000");
}

// Real Life usage
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");

    if(userLoggedIn && debitCard){
        console.log("Allow by shopping");
    }else{
        console.log("please fill card detail");
    }
}
else{
    console.log("Please Loggin")
}

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
let val2 = null ?? 10;

console.log(val1);
console.log(val2);