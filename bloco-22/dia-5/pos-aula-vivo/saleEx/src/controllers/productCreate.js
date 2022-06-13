const Product = require('../services');

module.exports = async (req, res) => {
  const product = req.body
  await Product.postProduct(product);
  res.status(201).json({message: 'Venda cadastrada com sucesso'});
};