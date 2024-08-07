var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
var calculatorRoutes = require('./routes/calculator.routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use('/api/calculator', calculatorRoutes);

module.exports = app;