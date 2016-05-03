'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(8081, () => console.log('server started on 8081.'));

