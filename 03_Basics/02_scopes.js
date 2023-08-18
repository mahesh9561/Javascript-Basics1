let a = 10; // block scope
const b = 20; // block scope
var c = 30; // global scope

console.log(a);
console.log(b);
console.log(c);

// {} - scopes

function one(){
    const userName = "Mahesh"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "Vivek"
    if(username === "Vivek"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // Error
}
// console.log(userName); //Error

// --------------------------Interesting Concept-----------------
function addOne(num){
    return num + 1;
}

console.log(addOne(5))

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5))