// importar pacotes do express
const { Router } = require('express');
//instancir o Router na variavel router
const router = Router();

const {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
        } = require('../controllers/controller')


//TODOS OS METODOS PELA URL

//metodo get
router.get('/listar', listarDados);

//metodo post
router.post('/gravar', gravarDados);

//metodo put
router.put('/atualizar/:id',atualizarDados);

//metodo delete
router.delete('/deletar/:id', deletarDados);

module.exports = router;