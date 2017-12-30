var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var db = require('./src/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

db.connect(function (err) {
    if (err) {
        console.log('Unable to connect to mongodb', err);
        process.exit(1)
    }
    else {
        console.log('Connected to mongodb');
        require('./src/routing')(app);
        app.listen(4201, function () {
            console.log('App running on port ' + 4201);
        });
    }
})

