const fs = require('fs/promises');

const postProduct= async (product) => {
  const newProduct = await fs.writeFile('../data/salesProducts.json', JSON.stringify({product}));
  return newProduct;
}