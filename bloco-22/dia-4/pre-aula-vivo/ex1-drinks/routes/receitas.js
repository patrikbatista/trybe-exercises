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

receitas.get('/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

receitas.get('/search', (req, res) => {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  // if (!filteredRecipes) return res.status(404).json({ message: 'Recipe not found!'});
  res.status(200).json(filteredRecipes);
});

module.exports = receitas;
