var express = require('express');
var app = express();
var routes = require('./routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


mongoose.connect("mongodb://admin:p1xelc4rlos@ds147920.mlab.com:47920/almacen");

var db = mongoose.connection;
// mongo error
db.on('error',console.error.bind(console, 'connection error:'));


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// rutas
app.use("/api",routes);

app.listen(3000, function () {
    console.log('Escuchando en el puerto: 3000!');
});

