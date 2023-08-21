// FOr of Loop
const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

for(const [key,value] in myObject){
    console.log(key, '-:' , value);
}

// For In Loop

const myObjects = {
    js : "Javascript",
    Cpp : "c++",
    rb : "Ruby",
    py : "Python"
}

for(const key in myObjects){
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const programming = ["js","ruby","py","java"];

for(const key in programming){
    console.log(programming[key]);
}

const myCoading = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoading.forEach( (item)=>{
    console.log(item.languageName +` :- `+ item.languageFileName);
} )