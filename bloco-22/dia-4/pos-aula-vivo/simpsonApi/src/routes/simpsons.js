const { Router } = require('express');
const fs = require('fs/promises');
const path = require('path');


const simpsons = Router();

const getAll = async () => {
  const simpsonsFile = await fs.readFile('./src/simpsons.json', 'utf-8');

  const simpsons = JSON.parse(simpsonsFile);
  return simpsons;
}

simpsons.get('/', async(req, res) => {
  try {
    const result = await getAll();
    if (!result) return res.status(500).json({message: 'Nao exite lista'});
    return res.status(200).json({result});
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = simpsons;