'use strict';
var arDrone = require('ar-drone');
var png = require('./video-server.js')

const express = require('express');
const app = express();
console.log(png);
app.use(express.static(__dirname + '/dist'));
app.listen(8080, () => console.log('server started on 8080.'));


//falied attempt #1
// var arDrone = require('ar-drone');
//
// var io = require('socket.io-client');
// var socket = io.connect('localhost', {port: 3111});
// socket.on('connect', function () { console.log('socket connected'); });
// socket.emit('video', { video: 'whazzzup?' });
//
//
// var client = arDrone.createClient();
// client.on('navdata', console.log);
//
// // var videoStream = client.getVideoStream();
// var pngStream = client.getPngStream();
// pngStream.on('connect', console.log);
// client.config('video:video_channel', 0);
// console.log('THIS IS THE PGN STREAM', pngStream);
//
// require('dronestream').listen(3001);

//attempt #2
// var arDrone = require('ar-drone');
// var client = arDrone.createClient();
// var fs = require('fs');
//
// var pngStream = client.getPngStream();
// var frameCounter = 0;
// var period = 5000; // Save a frame every 5000 ms.
// var lastFrameTime = 0;
//
// pngStream
//   .on('error', console.log)
//   .on('data', function(pngBuffer) {
//     var now = (new Date()).getTime();
//     if (now - lastFrameTime > period) {
//       frameCounter++;
//       lastFrameTime = now;
//       console.log('Saving frame');
//       fs.writeFile('frame' + frameCounter + '.png', pngBuffer, function(err) {
//         if (err) {
//           console.log('Error saving PNG: ' + err);
//         }
//       });
//     }
//   });

//attempt #3
// var arDrone = require('ar-drone');
// var http    = require('http');
//
// console.log('Connecting png stream ...');
//
// var pngStream = arDrone.createClient().getPngStream();
//
// var lastPng;
// pngStream
//   .on('error', console.log)
//   .on('data', function(pngBuffer) {
//     lastPng = pngBuffer;
//   });
//
// var server = http.createServer(function(req, res) {
//   if (!lastPng) {
//     res.writeHead(503);
//     res.end('Did not receive any png data yet.');
//     return;
//   }
//
//   res.writeHead(200, {'Content-Type': 'image/png'});
//   res.end(lastPng);
// });
//
// server.listen(8080, function() {
//   console.log('Serving latest png on port 8080 ...');
// });
