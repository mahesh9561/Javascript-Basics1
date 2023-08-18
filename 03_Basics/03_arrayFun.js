const user = {
    userName : "Mahesh Pathak",
    prices : 199,

    welcomeMesssage : function() {
        console.log(`Welcome ${this.userName}`);
        console.log(this)
    }
}
user.welcomeMesssage(); // Welcome Mahesh Pathak
user.userName = "Vivek";
user.welcomeMesssage();

console.log(this);

//---------------------------------------
function myFun1(){
    let username = "Mahesh"
    console.log(this.username);
}
myFun1();

const myFun2 = function() {
    let username = "Vivek"
    console.log(this.username);
}
myFun2();

// Arrow Function
const myFun3 = () => {
    let username = "Mahesh Vivek"
    console.log(this.username);
}
myFun3();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));