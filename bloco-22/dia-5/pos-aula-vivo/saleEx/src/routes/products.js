const { Router } = require('express');

const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const controllers = require('../controllers');

const products = Router();

products.post('/', (req, res, _next) => res.end());