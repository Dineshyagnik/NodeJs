// // import { EventEmitter } from 'events'; 
// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter { }

// const myEmitter = new MyEmitter();

// myEmitter.on('WaterFull', () => {
//     console.log('Please turn off the mootor!');
//     setTimeout(() => {
//         console.log('Please turn off the motor! Its a gentle reminder');
//     }, 3000);
// });

// console.log('The script is running');
// myEmitter.emit('WaterFull');
// console.log('The script is still running');



// const events = require('node:events');
// events.captureRejections = true;
// const ee1 = new events.EventEmitter();
// ee1.on('something', async (value) => {
//     throw new Error('kaboom');
// });

// ee1.on('error', console.log);

// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter { }
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//     setImmediate(() => {
//         console.log('this happens asynchronously');
//     });
// });
// myEmitter.emit('event', 'a', 'b');


const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2