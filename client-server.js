'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
app.use(express.static('./dist'));

app.get('/', function(req, res){
  res.sendfile('./index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('keydown', (key) => {
    console.log(key);
  });
});

http.listen(PORT, function(){
  console.log('Client server listening on port ' + PORT);
});
