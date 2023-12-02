// const http = require('http');

// const port = process.env.PORT || 4000;

// const sever = http.createServer((req, res) => {
//     console.log(req.url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html')
//     res.end('<h1>Nodejs Learning </h1> <p>Hello World </p>');
// });

// sever.listen(port, () => {
//     console.log(`Server is listening on ${port}`);
// });

// const http = require('node:http');
// // const keepAliveAgent = new http.Agent({ keepAlive: true });
// // options.agent = keepAliveAgent;
// // http.request(options, onResponseCallback);

// http.get({
//     hostname: 'localhost',
//     port: 80,
//     path: '/',
//     agent: false,  // Create a new agent just for this one request
//   }, (res) => {
//     // Do stuff with response
//   }); 


// const http2 = require('node:http2');
// const fs = require('node:fs');

// const server = http2.createSecureServer({
//   key: fs.readFileSync('localhost-privkey.pem'),
//   cert: fs.readFileSync('localhost-cert.pem'),
// });
// server.on('error', (err) => console.error(err));

// server.on('stream', (stream, headers) => {
//   // stream is a Duplex
//   stream.respond({
//     'content-type': 'text/html; charset=utf-8',
//     ':status': 200,
//   });
//   stream.end('<h1>Hello World</h1>');
// });

// server.listen(8443); 


const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000); 