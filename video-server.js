'use strict';
var express = require('express');
var app = express();
// require('http').createServer(app);
//
// app.use(express.static(__dirname + '/dist'));
//
// require('dronestream').listen(3001);
// app.listen(3000);


//PNG worked on munir's computer
var arDrone = require('ar-drone');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.get('/', function(req, res) {
  var pngStream = arDrone.createClient().getPngStream();
  var lastPng;
  pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
    console.log(lastPng);
  });
  if (!lastPng) {
    res.writeHead(503);
    res.end('Did not receive any png data yet.');
    return;
  }
  console.log(lastPng);
  res.writeHead(200, {'Content-Type': 'image/png'});
  res.end(lastPng);
});

app.listen(8081, function() {
  console.log('Serving latest png on port 8081 ...');
});
