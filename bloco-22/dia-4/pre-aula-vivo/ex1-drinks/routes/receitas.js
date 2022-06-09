const { Router } = require('express');

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const receitas = Router();

receitas.get('/', (req, res) => {
  res.status(200).json(recipes);
});

module.exports = receitas;
