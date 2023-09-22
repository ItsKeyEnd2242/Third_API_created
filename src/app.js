const express = require('express');
const app = express();

const dotenv = require('dotenv').config();

//setar a porta do servidor a partir do arquivo .env
app.set('port', process.env.PORT);

//exporta a configuração para o app
module.exports = app;