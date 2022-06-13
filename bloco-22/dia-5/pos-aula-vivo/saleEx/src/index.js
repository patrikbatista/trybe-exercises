const express = require('express');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();
app.use(express.json());
 
app.use('/products', routes.products);
app.get('/', (req, res) => res.status(200).end());
app.use(middlewares.error);

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
