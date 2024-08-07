const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

router.get('/add', calculatorController.addition);
router.get('/subtract', calculatorController.subtraction);
router.get('/multiply', calculatorController.multiplication);
router.get('/divide', calculatorController.division);
router.get('/power', calculatorController.power);
router.get('/squareRoot', calculatorController.squareRoot);

module.exports = router;