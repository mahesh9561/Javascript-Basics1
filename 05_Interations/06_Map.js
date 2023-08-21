const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNumbers.map( (num)=>{
//     return num +10;
// } )
// console.log(newNums);

newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNums);


// Reduce
const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce(function (accumulator, currunt) {
    console.log(`accumulator: ${accumulator} And currunt: ${currunt}`);
    return accumulator + currunt
}, 0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "Js Course",
        price: 2999,
    },
    {
        itemName: "Java Course",
        price: 4999,
    },
    {
        itemName: "React Course",
        price: 3999,
    },
    {
        itemName: "DSA Course",
        price: 8999,
    },
]

const pricetoPay = shoppingCard.reduce((accumulator, item) => (accumulator + item.price),0)

console.log(pricetoPay);