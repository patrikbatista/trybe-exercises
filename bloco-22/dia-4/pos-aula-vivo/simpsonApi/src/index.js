const express = require('express');

const simpsons = require('./routes/simpsons');

const app = express();


app.use(express.json());

app.use('/simpsons', simpsons);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});