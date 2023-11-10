//
const { Router } = require('express');
const router = Router();

const listarUsuarios = require('../controllers/alunosController');
// importar funç~eos para as rotas
const {
    listarUsuarios,
    cadastrarAluno
} = require('../controllers/alunosController')
router.get('/alunos', listarUsuarios);
router.post('/aluno/create')
module.exports = router;