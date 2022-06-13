const Products = require('../models');

const postProduct = async (product) => {
  const newProduct = await Products.postProduct({product});
  return newProduct;
}