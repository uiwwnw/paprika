var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile('index.html')
});
app.listen(8800, function () {
    console.log('Example app listening on port 8800!');
});
