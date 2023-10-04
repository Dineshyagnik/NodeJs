
// console.log('Task Start');
// function asyncTask(cb){
//     console.log('Task running');
//    setTimeout(cb,0)
// }
// // asyncTask(()=>console.log('Dinesh'));
// asyncTask(()=>console.log(name));
// console.log('Task end');
// const name='Dinesh';


// function asyncTask(cb){
//    setTimeout(()=>{
//     cb(null,"This is data from server");
//    },0)
// }
// asyncTask((err,data)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("data",data);
//     }
// });



function asyncTask(cb) {
    setTimeout(() => {
        cb(null, "This is data from server");
    }, 0)
}

function makeApiCall(cb) {
    setTimeout(() => {
        console.log('This is Async task execution');
    }, 0);
}

// makeApiCall(() => {
//     makeApiCall(() => {
//         asyncTask(() => {
//             asyncTask(() => {
//                 asyncTask(() => { })
//             })
//         })
//     })
// })


makeApiCall(() => {
    makeApiCall(() => {
        asyncTask(() => {
            asyncTask(() => {
                asyncTask(() => { })
            })
        })
    })
})

makeApiCall();