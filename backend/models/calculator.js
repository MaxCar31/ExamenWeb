const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    operation: {
        type: String,
        required: true
    },
    operands: {
        type: [Number],
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Calculation', calculationSchema);
