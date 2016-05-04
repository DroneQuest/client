'use strict';
var express = require('express');
var app = express();
require('http').createServer(app);

app.use(express.static(__dirname + '/dist'));

require('dronestream').listen(3001);

app.listen(3000);
