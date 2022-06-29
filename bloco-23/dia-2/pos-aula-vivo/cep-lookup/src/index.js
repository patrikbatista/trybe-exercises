const express = require('express');
require('express-async-errors');

const cepRoute = require('./routes/cepRoute');
const handlerError = require('./middlewares/handlerError');

const app = express();
app.use(express.json());

app.use('/cep', cepRoute);

app.use(handlerError);

app.listen(3000, () => console.log('listening on port 3000'));