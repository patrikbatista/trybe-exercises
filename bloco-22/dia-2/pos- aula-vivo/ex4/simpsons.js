const fs = require('fs').promises;

const readAll = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(file);
  const strings = simpsons.map((simpsom) => `${simpsom.id} - ${simpsom.name}`);
  //mostrando todos os simpsons 
  strings.forEach((string) => console.log(string));
}