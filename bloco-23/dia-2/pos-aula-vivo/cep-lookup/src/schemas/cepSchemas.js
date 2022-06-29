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
  cep: Joi.string().length(8).required()
    .messages({ 
      'any.required': 'cep é obrigatorio',
      'string.length': 'cep deve ter 8 caracteres',
      'string.base': 'cep tem deve ser string',
    }),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
}).required();

const validateBodyEdit = (value) => {
  const result = bodyAddSchema.validate(value);
  if (result.error) {
    console.log(result.error);
    const error = { 
      status: 422, 
      message: result.error.details[0].message, 
    };
    throw error;
  }
  return result;
};

module.exports = {
  isValideCep,
  validateBodyEdit,
};