// importar pacotes do express
const { Router } = require('express');
//instancir o Router na variavel router
const router = Router();


//TODOS OS METODOS PELA URL

//metodo get
router.get('/api', (request, response) => {
    response.send('poggers!');
    console.log('Metodo get usado');
});


//metodo post
router.post('/api', (request, response) => {
    response.send('Metodo utilizado para salvar informações');
    console.log('Metodo post usado');
    console.log(request);
});


//metodo put
router.put('/api', (request, response) => {
    response.send('Metodo utilizado para substituir informações');
    console.log('Metodo put usado');
    console.log('id: ', request.params.id);
});

//metodo delete
router.delete('/api', (request, response) => {
    response.send('DELETADOOOOO!');
    console.log('Metodo delete usado');
});

module.exports = router;