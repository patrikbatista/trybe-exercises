const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).end());

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
