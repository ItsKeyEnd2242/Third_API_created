const express = require('express');
const app = express();

const router = require('./routes/CrudRouter')

const dotenv = require('dotenv').config();

app.set('port', process.env.PORT);

module.exports = app;