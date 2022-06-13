const fs = require('fs/promises');

module.exports = async (product) => {
  const newProduct = await fs.writeFile('./data/salesProducts.json', JSON.stringify({product}));
  return newProduct;
}