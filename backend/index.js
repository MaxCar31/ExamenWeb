const express = require('express');
const mongoose = require('mongoose');
const calculatorRoutes = require('./routes/calculator.routes'); // Ajusta la ruta según sea necesario

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
app.use(express.json());

// Rutas
app.use('/api', calculatorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
