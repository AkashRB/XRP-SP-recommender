
var express = require('express'),
  http = require('http');

var hostname = 'localhost';
var port = 1111;

var app = express();
var router = express.Router();

    //BasketHandler Routes
    router.route('/history').get(function (req, res) { res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1111');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send(JSON.stringify({ 'a': 1 })); });



app.use(function (req, res, next) {
  console.log(req.headers);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //res.end('<html><body><h1>Hello World</h1></body></html>');

});


var server = http.createServer(app);

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.close();