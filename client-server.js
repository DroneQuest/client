'use strict';

const express = require('express');
const app = express();

// var arDrone = require('ar-drone');
//
// var io = require('socket.io-client');
// var socket = io.connect('localhost', {port: 3111});
// socket.on('connect', function () { console.log('socket connected'); });
// socket.emit('video', { video: 'whazzzup?' });
//
//
// var client = arDrone.createClient();
// var pngStream = client.getPngStream();
// pngStream.on('data', console.log);
//
// client.config('video:video_channel', 0);
// require('dronestream').listen(3001);


app.use(express.static(__dirname + '/dist'));
app.listen(5555, () => console.log('server started on 5555.'));
