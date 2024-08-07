const express = require('express');
const cors = require('cors');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');


router.use(cors())

router.get('add', calculatorController.addition);
router.get('/subtract', calculatorController.subtraction);
router.get('/multiply', calculatorController.multiplication);
router.get('/divide', calculatorController.division);
router.get('/power', calculatorController.power);
router.get('/squareRoot', calculatorController.squareRoot);

module.exports = router;