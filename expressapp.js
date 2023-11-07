// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/about', (req, res) => {
//   res.send('About Page!')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });


var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var urlencoded = require('url');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOverride = require('method-override');