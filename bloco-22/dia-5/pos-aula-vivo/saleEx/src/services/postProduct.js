const models = require('../models');

module.exports = async (product) => {
  console.log('services');
  const newProduct = await models.postProduct(product);
  return newProduct;
}
