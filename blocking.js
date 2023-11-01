var fs = require('fs');
var data1=fs.readFileSync('apple.txt',);
var data2=fs.readFileSync('text.txt',);
var data3=fs.readFileSync('text2.txt',);
console.log(data1.toString());
console.log(data2.toString());
console.log(data3.toString());
console.log('End here...');