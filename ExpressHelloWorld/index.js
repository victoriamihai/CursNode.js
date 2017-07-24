var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('no POST method available');
});
 
app.listen(3000);
console.log("aplicatia merge pe port 300");