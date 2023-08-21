// const Coding = ["Js","ruby","Java","Python","React"];
// ForEach Loop Can't Return Values

// const Values = Coding.forEach( (item)=> {
//     console.log(item);
// } )

// console.log(Values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4) // condition
console.log(newNums); //Return Values

const newNums1 = myNums.filter((num) => { //Fiter
    return num > 4 // Write return keyward if you use {}-scope 
}) // condition
// console.log(newNums); //Return Values



const newNums2 = [];

myNums.forEach((num) => { //forEach
    if (num > 4) {
        newNums2.push(num);
    }
})
// console.log(newNums2);

// Filter Api Example

const data = [
    {
        id: 1,
        title: 'React JS tutorial',
        views: 1000,
        time: '1 Month ago',
        channel: 'Mahesh',
        verified: true
    }, {
        id: 2,
        title: 'Node JS tutorial',
        views: 999,
        time: '1 year ago',
        channel: 'Mahesh',
        verified: false
    }, {
        id: 3,
        title: 'Express JS tutorial',
        views: 99,
        time: '3 Month ago',
        channel: 'Vivek',
        verified: true
    }
];

let userData = data.filter( (yt)=> {
    return yt.channel === "Vivek";
})

// userData = data.filter( ()=>{
//     return yt.views == 999 && yt.verified === true
// } )

 userData = data.filter((yt) => {
    return yt.views >= 99 && yt.verified === true;
});
console.log(userData);

