const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cep = Router();

cep.get('/:cep', cepController.getCepParams);
cep.post('/', cepController.addCep);

module.exports = cep;