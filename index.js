// console.log('Hello World');

// const app=require('./app')

// let a=9;
// let b=19;
// let c=a+b;

// // console.warn(c)
// console.warn(app.z())

// const fs=require('fs');

// fs.writeFileSync('hello2.txt','dinesh');

// console.log('->>',__dirname);
// console.log('->>',__filename);


// const fs=require('fs').writeFileSync;
// fs('abc.txt','ABC');

// const http = require('http');


// http.createServer((req,res)=>{
//     res.write("<h1>Hello server20</h1>");
//     res.end();
// }).listen(4200);


// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>Hello, This is Dinesh</h1>");
//     res.end();
// }).listen(2300);



// const http = require('http');

// http.createServer((req,res)=>{
//     res.write('<h1>Hello Dinesh</h1>');
//     res.end();    
// }).listen(2200);


// const fs=require('fs');

// fs.writeFileSync("din.txt","Dinesh");



// const fs=require('fs');

// fs.writeFileSync("new.txt","Hello Something");

// const http=require('http');

// http.createServer((req,res)=>{
//     res.write("<h1>Hello node server</h1>");
//     res.end();
// }).listen(2200);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);