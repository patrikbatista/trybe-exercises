const fs = require('fs').promises;

const readAll = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(file);
  const strings = simpsons.map((simpsom) => `${simpsom.id} - ${simpsom.name}`);
  //mostrando todos os simpsons 
  strings.forEach((string) => console.log(string));
}

// criar funcao que pesquise pelo id do personagem

const findSimpsomId = async (id) => {
  const file = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(file);
  const simpsomId = simpsons.find((simpsom) => simpsom.id === id);
  if(!simpsomId) throw new Error('id não encontrado');
  return simpsomId; 
}

// Criar uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const filterSimpsons = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(file);
  const filteredSimpsons = simpsons.filter((simpson) => simpson.id !== 10 && simpson.id !== 6);
  // agora salvar o novo array criado no arquivo simpsons.json
  const writeFile = await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
  return writeFile;
}

const createSimpsonFamily = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(file);
  const filteredSimpsons = simpsons.filter((simpson) => simpson.id === 1 && simpson.id === 4);
  const newFile = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(filteredSimpsons));
  return newFile;
}