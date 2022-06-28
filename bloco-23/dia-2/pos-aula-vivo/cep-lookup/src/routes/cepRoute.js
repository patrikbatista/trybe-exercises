const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cep = Router();

cep.get('/:cep', cepController.getCepParams);

module.exports = cep;