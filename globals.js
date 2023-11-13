// const ac = new AbortController();

// ac.signal.addEventListener('abort', () => console.log('Aborted!'),
//     { once: true });

// ac.abort();

// console.log(ac.signal.aborted); 

// const ac = new AbortController();

// ac.signal.onabort = () => console.log('aborted!');

// ac.signal.addEventListener('abort', (event) => {
//     console.log(event.type);
// }, { once: true });

// ac.abort(); 


const ac = new AbortController();
ac.abort(new Error('boom!'));
console.log(ac.signal.reason);  // Error: boom! 