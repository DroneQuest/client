'use strict';
// var express = require('express');
// var app = express();
// require('http').createServer(app);
//
// app.use(express.static(__dirname + '/dist'));
//
// require('dronestream').listen(3001);
// app.listen(3000);


//PNG worked on munir's computer
var arDrone = require('ar-drone');
var http    = require('http');
module.exports = function() {
  var pngStream = arDrone.createClient().getPngStream();
  var lastPng;
  pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });

  var server = http.createServer(function(req, res) {
    if (!lastPng) {
      res.writeHead(503);
      res.end('Did not receive any png data yet.');
      return;
    }

    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(lastPng);
  });

  server.listen(8081, function() {
    console.log('Serving latest png on port 8081 ...');
  });
};
