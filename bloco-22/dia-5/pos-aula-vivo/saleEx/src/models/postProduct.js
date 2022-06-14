const fs = require('fs/promises');
const path = require('path');

module.exports = async (product) => {

  // const data = await fs.readFile('./data/salesProducts.json', 'utf-8');
  // data.push(product);
  await fs.writeFile('./data/salesProducts.json', JSON.stringify(product));

}        