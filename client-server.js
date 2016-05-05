'use strict';

// const express = require('express');
// const app = express();
//
// app.use(express.static(__dirname + '/dist'));
// app.listen(5555, () => console.log('server started on 5555.'));



var arDrone = require('ar-drone');

var io = require('socket.io-client');
var socket = io.connect('localhost', {port: 3111});
socket.on('connect', function () { console.log('socket connected'); });
socket.emit('video', { video: 'whazzzup?' });


var client = arDrone.createClient();
client.on('navdata', console.log);

var videoStream = client.getVideoStream();
videoStream.on('data', function(){
  console.log;
});
// client.config('video:video_channel', 0);
// console.log('THIS IS THE PGN STREAM', videoStream);

require('dronestream').listen(3001);
