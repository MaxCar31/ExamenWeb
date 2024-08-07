const Calculation = require('../models/calculator');

exports.addition = async (req, res) => {
    try {
        const { a, b } = req.query;
        const operands = [parseFloat(a), parseFloat(b)];
        if (operands.some(op => isNaN(op))) {
            return res.status(400).json({ message: 'Invalid operands' });
        }
        const result = operands.reduce((acc, num) => acc + num, 0);
        const calculation = new Calculation({ operation: 'addition', operands, result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.subtraction = async (req, res) => {
    try {
        const { a, b } = req.query;
        const operands = [parseFloat(a), parseFloat(b)];
        if (operands.some(op => isNaN(op))) {
            return res.status(400).json({ message: 'Invalid operands' });
        }
        const result = operands[0] - operands[1];
        const calculation = new Calculation({ operation: 'subtraction', operands, result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.multiplication = async (req, res) => {
    try {
        const { a, b } = req.query;
        const operands = [parseFloat(a), parseFloat(b)];
        if (operands.some(op => isNaN(op))) {
            return res.status(400).json({ message: 'Invalid operands' });
        }
        const result = operands[0] * operands[1];
        const calculation = new Calculation({ operation: 'multiplication', operands, result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.division = async (req, res) => {
    try {
        const { a, b } = req.query;
        const operands = [parseFloat(a), parseFloat(b)];
        if (operands.some(op => isNaN(op))) {
            return res.status(400).json({ message: 'Invalid operands' });
        }
        if (operands[1] === 0) {
            return res.status(400).json({ message: 'Division by zero error' });
        }
        const result = operands[0] / operands[1];
        const calculation = new Calculation({ operation: 'division', operands, result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.power = async (req, res) => {
    try {
        const { a, b } = req.query;
        const operands = [parseFloat(a), parseFloat(b)];
        if (operands.some(op => isNaN(op))) {
            return res.status(400).json({ message: 'Invalid operands' });
        }
        const result = Math.pow(operands[0], operands[1]);
        const calculation = new Calculation({ operation: 'power', operands, result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.squareRoot = async (req, res) => {
    try {
        const { a } = req.query;
        const operand = parseFloat(a);
        if (isNaN(operand)) {
            return res.status(400).json({ message: 'Invalid operand' });
        }
        const result = Math.sqrt(operand);
        const calculation = new Calculation({ operation: 'squareRoot', operands: [operand], result });
        await calculation.save();
        res.status(200).json({ message: 'Success', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};