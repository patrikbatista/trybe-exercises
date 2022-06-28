const express = require('express');
require('express-async-errors');

const handlerError = require('./middlewares/handlerError');

const app = express();
app.use(handlerError);

app.listen(3000, () => console.log('listening on port 3000'));