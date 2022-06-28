const db = require('./db');

const getCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';
  const [item] = await db.query(query, [cep]);
  return item;
};

const addCep = async (data) => {
  const query = `INSERT INTO cep_lookup 
  (cep, logradouro, bairro, localidade, uf) values(?,?,?,?,?);`;
  const [{ insertId }] = await db
      .query(query, [data.cep, data.logradouro, data.bairro, data.localidade, data.uf]);
    return {
      id: insertId,
      cep: data.cep, 
      logradouro: data.logradouro, 
      bairro: data.bairro, 
      localidade: data.localidade, 
      uf: data.uf,
    };
};
module.exports = {
  getCep,
  addCep,
};