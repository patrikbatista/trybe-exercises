const db = require('./db');

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?;';
  const [item] = await db.query(query, [cep]);
  return item;
};

const addCep = async (data) => {
  const query = `INSERT INTO ceps
  (cep, logradouro, bairro, localidade, uf) values(?,?,?,?,?);`;
  await db
      .query(query, [data.cep, data.logradouro, data.bairro, data.localidade, data.uf]);
    return {
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