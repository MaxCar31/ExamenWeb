var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
var calculatorController = require('./controllers/calculator.controller'); // Ajusta según sea necesario

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/add', calculatorController.addition);
app.get('/subtract', calculatorController.subtraction);
app.get('/multiply', calculatorController.multiplication);
app.get('/divide', calculatorController.division);
app.get('/power', calculatorController.power);
app.get('/squareRoot', calculatorController.squareRoot);

module.exports = app;
