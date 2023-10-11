// const promise = new Promise((resolve, reject) => {
//     console.log('Async task execution');
//     throw "err"
//     if (false) {
//         const person={name:"Dinesh"}
//         resolve(person);
//     }
//     else {
//         const error={errCode:'1001'}
//         reject(error);
//     }
// });
// promise.then(
//     (val) => {
//         console.log(val);
//     },
//     // (err) => {
//     //     console.log(err);
//     // }
// ).catch((err)=>{console.log(err);})
// .finally(()=>{console.log('clean up')});


// let p = Promise.resolve('execution done!');
// // let p = Promise.reject('execution rejected!');

// p.then((val)=>console.log(val));


// function asyncTask(){
//    return Promise.resolve();
// };
// asyncTask().then(()=>console.log(name));
// const name='Dinesh';


// const p=Promise.resolve('done');

// p.then((val)=>{
//     console.log(val);
//     return 'done2'
// }).then((val)=>{
//     console.log(val);
//     return 'done3'
// }).then((val)=>console.log(val));



// const p=Promise.reject('failed');
// p.then((val)=>{
//     console.log(val);
//     return 'done2'
// }).then((val)=>{
//     console.log(val);
//     return 'done3'
// }).then((val)=>console.log(val))
// .catch(val=>console.log(val));


const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This Api Executed in: ' + time)
        }, time)
    })
};
// makeApiCall(1000).then((val)=>console.log(val));

let multiAPICall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];

Promise.all(multiAPICall).then((vales)=>{
    console.log(vales);
});

Promise.race(multiAPICall).then((value)=>{
    console.log(value);
})