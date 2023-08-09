// array

const myArr = [0,1,2,3,4,5];
const myHeroes = ["ironman","hulk"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);

// Array Method

myArr.push(6);
myArr.push(7);

console.log(myArr);

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

// slice ,splice

console.log("A", myArr);
const myn1=  myArr.slice(1,3) ;
console.log(myn1);

console.log("B",myArr);
const myn2 =   myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

// 2_Arrays
// push
const marvel_heros = ["thor","iornman","hulk"];
const dc_heros = ["superman","flash","batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
// Concat
const all_heroes = marvel_heros.concat(dc_heros);
console.log(all_heroes);

// Spread
const all_new_heros = [...marvel_heros, ...dc_heros];

const another_array = [1,2,3,4,5,[6,7,8],9,8,6];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); //check is Array
console.log(Array.from("Hitesh")); // convert in Array

console.log(Array.from({name: "hitesh"})) //interseting for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));