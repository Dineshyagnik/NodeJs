const http = require('http');

const port = process.env.PORT || 4000;

const sever = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Nodejs Learning </h1> <p>Hello World </p>');
});

sever.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});