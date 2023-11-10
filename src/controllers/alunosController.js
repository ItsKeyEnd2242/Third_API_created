    // importar a conexão com o banco de dados
const connection = require('../config/db');

    // função async: realiza uma requisição de forma paralela ao sistema
    // request: nesta variável reocupamos os dados enviados na requisição
    // response: tem a responsabilidade de retornar as informações para aquem requisitou 
async function listarUsuarios(request, response) {
    // Variável para executar a consulta no banco

async function cadastrarAluno(request, response) {
    // passo 1: recuperar variaveis
    // passo 2: montar query para inserir dados
    // passo 3: tentar executar a ação no banco
    // passo 4: definir retorno de requisição
}

    // recuperando dados da requisição
    const params = Array (
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao
    )

    const query = 'SELECT * FROM alunos;';
    //  err: retorna erros na execução
    //  results: retorna a ação realizada com sucesso
    connection.query (query, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso! Lista de alunos",
                    data: results
                }
            );
        
    } else {
        response
        .status(400)
        .json({
            sucess: false,
            message: "ooops! não foi possivel listar as informações solicitadas!",
            data: err
        }
        );
    }})

    const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso! Aluno cadastrado",
                data: result
            })
        }
    }
)}

module.exports = {
    listarUsuarios,
    cadastrarAluno
}; 