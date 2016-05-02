'use strict';

const messages = require('./js/messages');
var io = require('socket.io-client');

$(document).on('keydown', (event) => {
  var socket = io('http://127.0.0.1:3000');
  console.log(messages[event.keyCode]);
  socket.emit('keydown', messages[event.keyCode]);
  return false;
});
