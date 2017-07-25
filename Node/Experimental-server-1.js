
var express = require('express'),
  http = require('http');

var hostname = 'localhost';
var port = 1111;

var app = express();
var router = express.Router();

app.use(function (req, res, next) {
  console.log(req.headers);
  
  //res.end('<html><body><h1>Hello World</h1></body></html>');
  next();

});

app.get('/history',function (req, res) {
  console.log("Inside the route history:");
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send(JSON.stringify({ 'a': 1 }));
});


var server = http.createServer(app);

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.close();