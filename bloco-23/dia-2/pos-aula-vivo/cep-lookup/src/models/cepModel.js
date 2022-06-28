const db = require('./db');

const getCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';
  const [item] = await db.query(query, [cep]);
  return item;
};

module.exports = {
  getCep,
};