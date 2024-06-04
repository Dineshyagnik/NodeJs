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

// -------------------------------------------------------------------------------------
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
// const express=require('express');
// const app=express();

// const reqFilter=(req,resp,next)=>{
//   if(!req.query.age)
//   {
//     resp.send("Please provide age")
//   }
//   else if(req.query.age<18){
//     resp.send("You can not access this page")
//   }
//   else{

//       next();
//   }
// }

// app.use(reqFilter)

// app.get('',(req,res)=>{
//     res.send('Welcome to home page')
// });

// app.get('/user',(req,res)=>{
//     res.send('Welcome to user page')
// })

// app.listen(3000);


//route level middleware
// const express=require('express');
// const reqFilter=require('./middleware')
// const app=express();
// const route=express.Router();

// // app.use(reqFilter)

// route.use(reqFilter)

// app.get('/',(req,res)=>{
//     res.send('Welcome to home page')
// });

// app.get('/user',(req,res)=>{
//     res.send('Welcome to user page')
// });

// route.get('/about',(req,res)=>{
//   res.send('Welcome to About Page')
// });

// route.get('/contact',(req,res)=>{
//   res.send('Welcome to Contact page')
// });

// app.use('/',route)

// app.listen(3000);


// ----------------------------------------------------------------------------------------
// mongoDB with NodeJS
// Database Conectivity
// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const databse = 'e-com';
// const client = new MongoClient(url);

// async function getData()
// {
//   let result = await client.connect();
//   let db = result.db(databse);
//   let collection = db.collection('products');
//   let response = await collection.find({}).twoArray();
//   console.log(response);
// }

// getData();







//
// Start Again 

// console.log("Hello NodeJs");

// const _ =require('lodash');
// const arr=[1,3,46,7];
// console.log(_.chunk(arr));
// console.log(_.last(arr));

// const cowsay = require('cowsay');
// console.log(cowsay.say({
//     text: 'I am learning NPM module',
//     e: '00',
//     t: 'u'
// }));

// const {tesla,ford} = require('./car');
// console.log(JSON.stringify(ford,null, 3));
// console.log(JSON.stringify(tesla,undefined, 2));


// const path = require('path');

// const filePath = "Users\dyyay\OneDrive\Documents\GitHub\NodeJs\filess\sample.txt";


// // dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// // basename
// console.log(path.basename(filePath));
// console.log(__filename);
// // extension
// console.log(path.extname(filePath)); 

// const sampleFile="sample.txt";
// console.log(path.join(path.dirname(filePath),sampleFile));


// const fs = require('fs');
// const fsPromise = require('fs').promises;
// Reading from a file-Async
// console.log(fs);
// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) throw new Error("Something went wrong!");
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync(path.join(__dirname, "filess", "sample.txt"), "utf-8")
//     console.log(data);
// }
// catch (err) {
//     console.log(err);
// }

// const filereading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath,{encoding:'utf-8'})
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// };

// filereading();

//writing into file 
// const txtFile = path.join(__dirname, "filess", "text.txt");
// const content = "Hello NodeJS! ";
// fs.writeFile(txtFile, content, (err) => {
//     if (err) throw new Error("Something went wrong!");
//     console.log("write operation completed successfully");
//     fs.readFile(txtFile, 'utf-8', (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data);
//     })
// });

// const writingInFile = async () => {
//     try {
//         await fsPromise.writeFile(txtFile, "\n we have given new name of file", {
//             flag: 'a+',
//         });
//         // await fsPromise.appendFile(txtFile, '\n this is file appender');

//         await fs.promises.rename(txtFile,path.join(__dirname,"filess","newtxt.txt"))

//         const data = await fsPromise.readFile(path.join(__dirname,"filess","newtxt.txt"));
//         console.log(data.toString());
//     }
//     catch (err) {
//         console.log(err);
//     }

// };

// writingInFile()

// const dinesh = require('./second');
// console.log('Hello World', obj);



// console.log('nodejs again');

// var a=30;
// var b=20;
// var c=10;

// console.warn(a+b+c);


// var x=30;
// let y=20;
// const z=10;
// z=10; // throw eror
// console.warn(x+y+z);


// var x=20;
// if(x===0){
//     console.log('matched');
// }
// else{
//     console.log('not matched');
// }

// for(let i=0;i<=10;i++){
//     console.log(i);
// }


// let num = 3;

// for(let i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// let arr=[2,44,3,6,8,9,0];
// console.log(arr);


// const app = require('./app');
// // console.log(app);
// // console.log(app.x);
// // console.log(app.y);
// console.log(app.z());



// let arr=[2,44,3,6,8,9,9,0];

// let filteredValue=arr.filter((val)=>{
//     // return val>10;
//     // return val<10;
//     return val===9;
// });
// console.log(filteredValue);


// const fs = require('fs');
// fs.writeFileSync("some.txt","Some text");
// console.log('----->>>>>',__dirname);
// console.log('----->>>>>',__filename);



// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello World</h1>");
//     resp.end();

// }).listen(4500);



// function dataControl(req,resp){
//     resp.write('<h1>Hello NodeJs</h1>');
//     resp.end();
// };

// http.createServer(dataControl).listen(4500);



// const dataControl=(req, resp)=>{
//     resp.write('<h1>Hello NodeJs Again</h1>');
//     resp.end();
// };

// http.createServer(dataControl).listen(4500);




// const colors = require('colors');

// // console.log('hello'.green);
// console.log('i like cake and pies'.underline.red)


// const chalk=require('chalk');

// // console.log(chalk.blue('Hello'));
// // console.log(chalk.blue.bgRed.bold('Hello world!'));

// const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));





// const http= require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello Madhukar</h1>");
//     resp.end();
// }).listen(8000);




// create a simple API 

const http = require('http');
const data = require('./data')

http.createServer((req,resp)=>{

    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(7000);