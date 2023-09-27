// importar pacotes do express
const express = require('express');
const app = express();
//instancir o Router na variavel router
const router = express.Router();


//TODOS OS METODOS PELA URL

//metodo get
router.get('/api', (request, response) => {
    response.send('poggers!');
    response.log('poggers!');
});


//metodo post
router.post('/api', (request, response) => {
    response.send('');
    response.log('Metodo utilizado para salvar informações');
});


//metodo put
router.put('/api', (request, response) => {
    response.send('Metodo utilizado para substituir informações');
    response.log('Metodo utilizado para substituir informações');
});

//metodo delete
router.delete('/api', (request, response) => {
    response.send('DELETADOOOOO!');
    response.log('DELETADOOOOO!');
});

module.exports = router;