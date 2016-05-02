'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

let app = module.exports = exports = express();
app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log('Client server listening on port ' + PORT);
});

