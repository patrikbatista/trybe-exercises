const cepSchemas = require('../schemas/cepSchemas');
const cepServices = require('../services/cepServices');

const getCepParams = async (req, res) => {
  const { cep } = req.params;

  cepSchemas.isValideCep(cep);
  await cepServices.cepExist(cep);
  res.status(200).json({ cep });
};

module.exports = { 
  getCepParams,
};