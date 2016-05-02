'use strict';

const express = require('express');

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
app.use(express.static('./dist'));

app.get('/', function(req, res){
  res.sendfile('./index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('keypress', (key) => {
    console.log(key);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});














