// Immediately Invoked Function Expressions (IIFE)

(function myFun() { //Named IIFE
    console.log(`DB Connection`)
})(); // ; - must use

( () => {
    console.log(`DB Connection Two`)
})();

( (name) => {
    console.log(`DB Connection Two ${name}`)
})("Mahesh");

