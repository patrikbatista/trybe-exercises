const cepSchemas = require('../schemas/cepSchemas');
const cepServices = require('../services/cepServices');

const getCepParams = async (req, res) => {
  const { cep } = req.params;

  cepSchemas.isValideCep(cep);
  await cepServices.cepExist(cep);
  res.status(200).json({ cep });
};

const addCep = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  cepSchemas.validateBodyEdit({ cep, logradouro, bairro, localidade, uf });
  await cepServices.cepExistAdd();
  const result = await cepServices.cepAdd({ cep, logradouro, bairro, localidade, uf });
  res.status(201).json({ result });
};

module.exports = { 
  getCepParams,
  addCep,
};