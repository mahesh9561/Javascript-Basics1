// Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

 
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'GTA'
// }

// for(const [key,value] in myObject){
//     console.log(key, '-:' , value)
// }


// For Each Loop

const Coding = ["Js","ruby","Java","Python","React"];

// Coding.forEach( (item)=>{
//     console.log(item);
// } )

Coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
} )
