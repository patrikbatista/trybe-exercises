const { Router } = require('express');
const fs = require('fs/promises');
const path = require('path');


const simpsonsRouter = Router();

const getAll = async () => {

  const simpsonsFile = await fs.readFile('./src/simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFile);

  return simpsons;
}

const getSimpsomId = async (id) => {

  const simpsonsFile = await fs.readFile('./src/simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFile);

  const simpsonId = simpsons.find((simpson)=> +simpson.id === +id);
  console.log(simpsonId);
  return simpsonId;
}

const postSimpson = async (simpson) => {

  const newSimpson = await fs.writeFile('./src/simpsons.json', JSON.stringify(simpson));
  return newSimpson;

}

simpsonsRouter.post('/', async (req, res) => {

  try {
    const { id, name } = req.body;
    const simpsons = await getAll();
    const simpsonExist = await getSimpsomId(+id);

    if (simpsonExist !== undefined) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });
    await postSimpson(simpsons);
    
    return res.status(201).json({ message: 'Simpson cadastrado com sucesso!!!!'})

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'erro inesperado!!!!'});
  }

});

simpsonsRouter.get('/', async(req, res) => {

  try {
    const result = await getAll();
    if (!result) return res.status(500).json({message: 'Nao exite lista'});
    return res.status(200).json({result});
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'erro inesperado!!!!'});
  }

});

simpsonsRouter.get('/:id', async(req, res) => {

  try {
    const { id } = req.params;
    const simpsonFind = await getSimpsomId(id);
    if(!simpsonFind) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(200).json(simpsonFind);
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'erro inesperado!!!!'});
  }

});

module.exports = simpsonsRouter;