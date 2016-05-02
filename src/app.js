'use strict';

const messages = require('./js/messages');
// var io = require('socket.io-client');

// $(document).on('keydown', (event) => {
//   var socket = io();
//   console.log(event.keyCode);
//   console.log(messages[event.keyCode]);
//   socket.emit('keydown', messages[event.keyCode]);
//   return false;
// });


var exampleSocket = new WebSocket('ws://127.0.0.1:3000');

$(document).on('keydown', (event) => {
  exampleSocket.send('Hello Python!');
  exampleSocket.send(messages[event.keyCode]);
  console.log(messages[event.keyCode]);
  return false;
});
