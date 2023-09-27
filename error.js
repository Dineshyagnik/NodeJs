// Error Object 

const error = new Error('Something went wrong!');
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object");

const { customError } = require('./customError');
// throw new customError('This is a custom error');

// handle exception using try and catch 

// try {
//     doSomething();
// }
// catch (e) {
//     console.log('Error Occured');
//     console.log(e);
// }

function doSomething() {
    const data = fetch("localhost:3000/api")
    console.log("doSomething function called");
    // const data = "doSomething function called";
    // return data;
}

// uncaught exception

// process.on("uncaughtException",(error)=>{
//     console.log('Threre was an uncaught exception',error);
//     process.exit(1);
// });

// doSomething();

// Exception with promises

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(doSomething());
//     }
//     else {
//         reject(doSomething());
//     }
// });

// promise.then((val)=>{
//     console.log(val);
// }).catch((error)=>{
//     console.log('Error Occured');
//     console.log(error);
// });

// exception with Async and Await


const someFunction = async () => {
    try {
        await doSomething();
    }
    catch(error){
        // console.log(error);
        throw new customError(error.message)
    }
};
someFunction();