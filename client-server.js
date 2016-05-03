'use strict';

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(8081, () => console.log('server started on 8081.'));

// const PORT = process.env.PORT || 3000;
// const http = require('http');
// const WebSocketServer = require('websocket').server;
//
// let server = http.createServer(() => {});
//
// server.listen(PORT, () => {
//   console.log('Server listening on port ' + PORT);
// });
//
// let wsServer = new WebSocketServer({
//   httpServer: server
// });
//
// wsServer.on('request', (req) => {
//   var connection = req.accept('echo-protocol', req.origin);
//   console.log(req);
//   var count = 0;
//   var clients = {};
//   var id = count++;
//   clients[id] = connection;
//   console.log((new Date()) + 'Connection accepted [' + id + ']');
//
//   connection.on('message', (message) => {
//     console.log(message);
//     var msgString = message.utf8Data;
//     for(var i in clients) {
//       clients[i].sendUTF(msgString);
//     }
//   });
//
//   connection.on('close', (reasonCode, description) => {
//     delete clients[id];
//     console.log((new Date())
//         + ' Peer ' + connection.remoteAddress
//         + ' disconnected.');
//     console.log(reasonCode);
//     console.log(description);
//   });
// });
