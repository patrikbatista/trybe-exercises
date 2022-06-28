const cepSchemas = require('../schemas/cepSchemas');
const cepServices = require('../services/cepServices');

const getCepParams = (req, res) => {
  const { cep } = req.params;

  cepSchemas.isValideCep(cep);
  cepServices.cepExist(cep);
  res.status(200).json({ cep });
};

module.exports = { 
  getCepParams,
};