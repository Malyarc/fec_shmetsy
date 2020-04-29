var express = require('express');
var app = express();
const db = require('../database');

//app.use() => static





let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});