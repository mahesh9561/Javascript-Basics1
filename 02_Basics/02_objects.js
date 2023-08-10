
// Object Literals--

const mySym = Symbol("key1");
const JsUser = {
    name: "Mahesh",
    [mySym]: "mykey1",
    "full name":"Mahesh Pathak",
    age : 25,
    location: "Akola",
    email: "mahesh@gmail.com",
    isLogin : false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "maheshpathak@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "maheshpathak200@gmail.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Object 2

// Singleton
// object.create

const tinderUser = new Object() //Singleton Object
const tinderUser1 = {} //Non Singleton Object

tinderUser1.id = "123abc";
tinderUser1.name = "Mahesh";
tinderUser1.isLogin = false;

console.log(tinderUser1);

// Keys
console.log(Object.keys(tinderUser1)); // most usefull
console.log(Object.values(tinderUser1)); // most usefull

const regularUser = {
    email : "mahesh.pathak@gmail.com",
    fullname: {
        username : {
            userFullName : {
                firstname : "Mahesh",
                lastname :"Pathak",
            }
        }
    }
}
console.log(regularUser.fullname);

// Merge Objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1,obj2,obj3); // {} - target , object - source
const obj5 = Object.assign({}, obj1,obj2);
console.log(obj4);
console.log(obj5);

// Spread operator
obj6 = {...obj1, ...obj2};
console.log(obj6);

console.log("----------------------------------------------")
// OBJECT DE-STRUCTURE & JSON

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor:"Chai aur Code",
}
course.courseInstructor;

const {courseInstructor} = course
console.log(courseInstructor);

// API
