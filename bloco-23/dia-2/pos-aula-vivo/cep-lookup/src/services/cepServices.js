const cepModel = require('../models/cepModel');

const cepExist = async (cep) => {
  const result = await cepModel.getCep(cep);
  if (result.length === 0) {
    const error = { 
      status: 400,
      message: { error: { code: 'notFound', message: 'CEP não encontrado' } },
    };
    throw error;
  }
  return result;
};

module.exports = {
  cepExist,
};