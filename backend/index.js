const express = require('express');
const mongoose = require('mongoose');
const calculatorController = require('./controllers/calculator.controller'); // Ajusta según sea necesario
const cors = require('cors');
const bodyParser = require('body-parser'); // Asegúrate de tener esta línea

const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/calculatora', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.get('/add', calculatorController.addition);
app.get('/subtract', calculatorController.subtraction);
app.get('/multiply', calculatorController.multiplication);
app.get('/divide', calculatorController.division);
app.get('/power', calculatorController.power);
app.get('/squareRoot', calculatorController.squareRoot);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
