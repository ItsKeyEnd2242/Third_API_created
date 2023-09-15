// importar pacote express
const express = require('express');
// instanciar a express na variavel app
const app = express();
// importar o pacote dotenv
const dotenv = require('dotenv').config();
// definindo a porta do servidor
const PORT = process.env.PORT  || 2213;

//URL: localhost:2213/api
app.get('/api', (request, response) => {
    response.send('Olá, estou na minha api!');
});

//URL: localhost:2213/api
app.post('/api', (request, response) => {
    response.send('Metodo utilizado para salvar informações');
});

//URL: localhost:2213/api
app.put('/api', (request, response) => {
    response.send('Metodo utilizado para substituir informações');
});

app.delete('/api', (request, response) => {
    response.send('DELETADOOOOO!');
});


// testar o servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`));
