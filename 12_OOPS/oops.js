const user = {
    username : "Mahesh",
    loginCount : 8,
    signIn: true,

    getuserDetails : function () {
        // console.log("Hello Coder")
        console.log(this.username)
        console.log(this)
    }
}
console.log(user.username);
// console.log(user.getuserDetails())
// console.log(this)


// Constructor Function
// const promiceOne = new Promise();
// const date = new Date();

function users(username,loginCount,isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.greeting = function () {
        console.log(`Welcomme ${this.username}`);
    }

    return this;
}
const userOne = new users("Mahesh",12,true)
const userTwo = new users("vivek",11,false)
console.log(userOne.constructor);
// console.log(userTwo); //new - create a empty object - instance
// Call construnctor function
