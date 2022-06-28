const db = require('./db');

const getCep = (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';
  const item = db.query(query, [cep]);
  return [item];
};

module.exports = {
  getCep,
};