const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography,netwirk
    setTimeout(() => {
        console.log('Async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})
// --------------------------------------------------?
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2")
        resolve();
    }, 1000)

}).then(function () {
    console.log("Promise Chained")
})

// -------------------------------------------------------
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "mahesh@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

// -------------------------------------------------------
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "mahesh", email: "abc@gmail.com" });
        }
        else {
            reject('Error:Someting went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log("error")
    }).finally(() => {
        console.log("The promise eighther resolve or rejected")
    })
// -----------------------------------------------------

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Vivek", Password: "123" });
        }
        else {
            reject('Error:JS Went Wrong');
        }
    }, 1000)
})

// promiseFive.then()
async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response)
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();
// =--------------------------------------------=
// Fetch
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }

// }
// getAllUsers()
// jsonplaceholder.typicode.com/users

// -----------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})