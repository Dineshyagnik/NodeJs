const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4000;

const sever = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Home - Nodejs Learning </h1> <p>Home Page</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Nodejs Learning </h1> <p>About Page </p>');
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not found</h1> <p>Page not found on this server </p>');
    }
});

sever.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});