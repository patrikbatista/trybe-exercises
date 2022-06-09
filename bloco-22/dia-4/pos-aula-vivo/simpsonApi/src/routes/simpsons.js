const { Router } = require('express');
const fs = require('fs').promises;

// const simpsonsList = require('../../simpsons.json');

const simpsons = Router();

// const simpsons = JSON.parse(simpsonsList);

const getAll = async () => {
  const simpsonsFile = await fs.readFile('../../simpsons.json');
  const simpsons = JSON.parse(simpsonsFile);
}

simpsons.get('/', async(req, res) => {
  try {
    const result = await getAll();
    if (result === []) return res.status(404).json({message: 'Nao exite lista'});
    return res.status(200).json({result});
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = simpsons;