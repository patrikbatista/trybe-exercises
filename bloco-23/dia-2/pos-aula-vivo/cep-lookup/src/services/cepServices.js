const cepModel = require('../models/cepModel');

const cepExist = async (cep) => {
  const result = await cepModel.getCep(cep);
  if (result.length === 0) {
    const error = { 
      status: 400,
      message: 'CEP não encontrado',
    };
    throw error;
  }
  return result;
};

const cepExistAdd = async (cep) => {
  const result = await cepModel.getCep(cep);
  if (result.length !== 0) {
    const error = { 
      status: 400,
      message: 'CEP já existe',
    };
    throw error;
  }
  return result;
};

const cepAdd = async (value) => {
  await cepModel.addCep(value);
};

module.exports = {
  cepExist,
  cepExistAdd,
  cepAdd,
};