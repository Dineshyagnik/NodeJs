const fs = require('fs');

// fs.writeFileSync("text.txt", "Hello Node");

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     console.log(err, data);
// });

// const a = fs.readFileSync('text.txt');
// console.log(a.toString());

// fs.writeFileSync("text2.txt","File 2",()=>{
//     console.log('Written to the efile');
// });

const a = fs.writeFileSync('text2.txt', 'text 3')
console.log(a);
console.log('Finished reading file.');