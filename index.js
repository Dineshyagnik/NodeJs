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

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// const fs=require("fs");

// fs.writeFileSync("hello2.txt","Hello World!");


// const http=require("http");

// http.createServer((req,res)=>{
//   res.write("<h1>Hello Node Server2</h1>");
//   res.end();
// }).listen(8080);

// const colors=require('colors');
// console.log('package.json'.bgBlue);

// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// const colors=require('colors');

// console.log("hello".red);

// console.log('try nodemon with node');
// console.log(100+20);

// API Developing 

// const http = require('http');
// const data =require('./api');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(8080);




// console.log(process.argv[3]);

const fs=require('fs');
const input=process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log('Invailid input');
}