const cepValidate = require('@brazilian-utils/is-valid-cep');

const isValideCep = (cep) => {
  const isValid = cepValidate(cep);
  if (!isValid) {
    const error = { 
      status: 400, 
      message: { error: { code: 'invalidData', message: 'CEP inválido' } }, 
    };
    throw error;
  }
  return true;
};

module.exports = {
  isValideCep,
};