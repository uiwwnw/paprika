var express = require('express');
var app = express();
var path = require('path');
var mongodb = require('mongodb');
var db = require('mongodb').db;
var config = require('../config');

var MongoClient = require('mongodb').MongoClient;


MongoClient.connect(config.url, function (err, database) {
    var myAwesomeDB = database.db('paprika')
    var jordan = { name: 'Jordan', age: 16, gender: 'M' };
    var amanda = { name: 'Amanda', age: 17, gender: 'F' };
    var jessica = { name: 'Jessica', age: 15, gender: 'F' };
    var james = { name: 'James', age: 19, gender: 'M' };
    var catherine = { name: 'Catherine', age: 18, gender: 'F' }

    myAwesomeDB.collection('users').insertMany([jordan,amanda,jessica,james,catherine]);
    database.close();
});

app.use(express.static('public'));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
// })

app.listen(8800, function () {
    console.log('Example app listening on port 8800!');
});
