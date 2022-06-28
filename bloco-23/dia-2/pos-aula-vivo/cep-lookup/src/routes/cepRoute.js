const { Router } = require('express');

const cep = Router();

cep.get('/:cep', (req, res) => { res.send(201); });

module.exports = cep;