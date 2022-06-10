const express = require('express');
const app = express();

const routes = require('./routes')

app.use(express.json());

app.use('/receitas', routes.receitas);
app.use('/bebidas', routes.bebidas);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});