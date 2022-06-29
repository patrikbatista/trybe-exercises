const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'cep_lookup',
});

module.exports = db;