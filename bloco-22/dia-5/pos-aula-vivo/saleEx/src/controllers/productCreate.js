const services = require('../services');

module.exports = async (req, res) => {
  const product = req.body;
  console.log('contrller2', product);
  await services.postProduct(product);
  res.status(201).json({message: 'Venda cadastrada com sucesso'});
};