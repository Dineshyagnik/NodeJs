const express = require('express');
const app = express();

app.get('', (req, res) => {
    // console.log("Data sent by browser",req.query.name);
    // res.send('Hello ,'+ req.query.name)
    res.send(`
    <h1>Hello , Peter</h1>
    <a href='/about'>Go to about page</a>
    `)
});

app.get('/about',(req,res)=>{
res.send(`
<input type='text' placeholder='User name' value=${req.query.name} />
<button>Click me</button>
<br/>
<br/>
<a href='/'>Go to Home page</a>
`)
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'dinesh',
            email:'dinesh@gmail.com'
        },
        {
            name:'peter',
            email:'peter@gmail.com'
        },
        {
            name:'sam',
            email:'sam@gmail.com'
        }
    ])
})

app.listen(5000);