const { Router } = require('express');
const fs = require('fs/promises');
const path = require('path');


const simpsons = Router();

const getAll = async () => {

  const simpsonsFile = await fs.readFile('./src/simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFile);

  return simpsons;
}

const getSimpsomId = async (id) => {

  const simpsonsFile = await fs.readFile('./src/simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFile);

  const simpsonId = simpsons.find((simpson)=> +simpson.id === +id);
  return simpsonId;
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

simpsons.get('/:id', async(req, res) => {

  try {
    const { id } = req.params;
    const simpsonFind = await getSimpsomId(id);
    if(!simpsonFind) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(200).json(simpsonFind);
    
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = simpsons;