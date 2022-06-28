const cepValidate = require('@brazilian-utils/is-valid-cep');

const isValideCep = (cep) => {
  const isValid = cepValidate(cep);
  if (!isValid) {
    throw { status: 400, 
      message: { error: { code: 'invalidData', message: 'CEP inválido' } } };
  }
  return true;
};

module.exports = {
  isValideCep,
};