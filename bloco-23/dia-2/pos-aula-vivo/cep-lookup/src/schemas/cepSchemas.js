const cepValidate = require('@brazilian-utils/is-valid-cep');
const Joi = require('joi');

const isValideCep = (cep) => {
  const isValid = cepValidate(cep);
  if (!isValid) {
    const error = { 
      status: 400, 
      message: 'CEP inválido', 
    };
    throw error;
  }
  return true;
};

const bodyAddSchema = Joi.object({
  cep: Joi.string(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
}).required();

const validateBodyEdit = async (value) => {
  const result = await bodyAddSchema.validateAsync(value);
  if (!result) {
    const error = { 
      status: 401, 
      message: 'Dados inválidos', 
    };
    throw error;
  }
  return result;
};

module.exports = {
  isValideCep,
  validateBodyEdit,
};