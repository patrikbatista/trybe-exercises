const { Router } = require('express');

const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const controllers = require('../controllers');

const products = Router();

products.post('/', 
rescue(middlewares.productNameValidate),
rescue(middlewares.infoValidate),
rescue(controllers.productCreate));
products.get('/', (req, res, _next) => res.end());

module.exports = products;