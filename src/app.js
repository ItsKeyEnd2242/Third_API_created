const express = require('express');
const app = express();

const crudRouter = require('./routes/CrudRouter');

const dotenv = require('dotenv').config();

//habilitar a utilização do crudRouter
app.use('/api', crudRouter);

app.set('port', process.env.PORT);

module.exports = app;