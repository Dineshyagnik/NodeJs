const x = "1";
const y = "2";

// console.log(x,y);


// %s format variable to string 
// %d format for number
// %i for integer
//%o for object 

// console.log('I am %s and my age is %d','Dinesh',22);
// console.clear();
// console.count("I am Dinesh");
// console.count("I am Dinesh");
// console.count("I am Nikesh");
// console.countReset("I am Dinesh");
// console.count("I am Dinesh");

// const func = () => console.trace();
// const func2 = () => func();

// func2();


// const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// const mul = () => console.log(`The multiply of 2 and 3 is: ${2 * 3}`);

// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");

//     console.time("mul()");
//     mul();
//     console.timeEnd("mul()");
// }
// measureTime();

const progressBar = require('progress');

const bar = new progressBar('Downloading [:bar] :rate/bps :percent :etas', {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer)
    }
}, 1000);

const chalk = require('chalk');
console.log(chalk.green('This is green'));