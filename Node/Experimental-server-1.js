
var express = require('express'),
     http = require('http');

var hostname = 'localhost';
var port = 1111;

var app = express();

app.get('/history', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'a': 1 }));
    //res.end('This will show you the buying history');
});
  
app.use(function (req, res, next) {
  console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
  //res.end('<html><body><h1>Hello World</h1></body></html>');

});


var server = http.createServer(app);

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.close();