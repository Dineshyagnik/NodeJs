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

// const fs=require('fs');
// const input=process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else
// {
//     console.log('Invailid input');
// }


// create multiple files in a folder 
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'files');

// // for(let i=0;i<5;i++){
// //     fs.writeFileSync(dirpath+"/loop"+i+".txt","A simple text file");
// //     // fs.writeFileSync(`loop${i}.txt`,"A simple text file");
// // }

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     })
// })


// const fs =require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'crud');
// const filepath=`${dirpath}/tel.txt`;

// Create
// fs.writeFileSync(filepath,"Dummy Text");

// Read
// fs.readFile(filepath,'utf8',(err,item)=>{
// console.log(item);
// });

// Update 
// fs.appendFile(filepath,'Crud operation using nodejs',(err)=>{
//     if(!err) console.log("File is updated");
// });

// Change File name 
// fs.rename(filepath,`${dirpath}/demo.txt`,(err)=>{
//     if(! err) console.log('File name is updated');
// });

// Delete 
// fs.unlinkSync(`${dirpath}/demo.txt`);


// Synchronous and Asynchronous
// let a=10;
// let b=0;

// setTimeout(()=>{
//     b=20
//      },2000)

// console.log(a+b);



// // Promise
// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// });

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);
// });

// How node js works
// console.log("Starting up");

// setTimeout(() => {
//     console.log("2 second log");
// }, 2000)

// setTimeout(() => {
//     console.log("0 second log");
// }, 0)

// console.log("finishing up");



// views and dyanamic routing 
// --------------------------------------------------------------------------------

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public')

// // app.use(express.static(publicPath));

// app.set('view engine', 'ejs');

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// });

// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Dinesh',
//         email: 'dinesh22@gmail.com',
//         city: 'Noida',
//         skills: ['Js', 'jQuery', 'Node', 'express', 'MonogoDB', 'NextJS', 'ReactJS']
//     }
//     res.render('profile', { user });
// });

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// });

// app.get('/help', (req, res) => {
//     res.sendFile(`${publicPath}/help.html`)
// });

// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/nopage.html`)
// });

// app.listen(4000);



//middleware
const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
  if(!req.query.age)
  {
    resp.send("Please provide age")
  }
  else if(req.query.age<18){
    resp.send("You can not access this page")
  }
  else{

      next();
  }
}

app.use(reqFilter)

app.get('',(req,res)=>{
    res.send('Welcome to home page')
});

app.get('/user',(req,res)=>{
    res.send('Welcome to user page')
})

app.listen(3000);