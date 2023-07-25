const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');
const dataBase = require('./utils/dataBase');

const { PORT = 3000 } = process.env;

mongoose.connect(dataBase);

const app = express();

app.use(bodyParser.json());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);
app.use(errors());

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server run at ${PORT}`);
});
