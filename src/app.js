'use strict';

const messages = require('./js/messages');
var socket = new WebSocket('ws://localhost:3000', 'echo-protocol');

$(document).on('keydown', (event) => {
  socket.send('Hello Python!');
  socket.send(messages[event.keyCode]);
  console.log(messages[event.keyCode]);
  return false;
});
