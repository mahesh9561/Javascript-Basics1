function sayMyName(){
    console.log('my name is jack');
}

sayMyName();

function addTwoNumber(num1,num2){
    console.log(num1 + num2);
    let result = num1 + num2;
    return result
    return num1 + num2;

}
addTwoNumber(5,2);

// Advance

function calculateCartPrice(...num1) { //rest operator
    return num1;
}
console.log(calculateCartPrice(200,400,600));

// Objects
const user = { // object 
    userName : "Mahesh Pathak",
    Prices : 199,
}

function handObject(anyObject){ //function
    console.log( `Hello my name is ${anyObject.userName} and bought a bat and its price is ${anyObject.Prices}`)
}
handObject(user) //function declair

// Arrays 

const myArrays = [100,200,300,400];

function returnSecValue(getArray){
    return getArray[1];
}   
console.log(returnSecValue(myArrays));

