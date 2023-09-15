// importar pacote express
const express = require('express');
// instanciar a express na variavel app
const app = express();
// importar o pacote dotenv
const dotenv = require('dotenv').config();
// definindo a porta do servidor
const PORT = process.env.PORT  || 2213;

// testar o servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`));
