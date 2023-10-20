function listarDados(request, response){
    response.send('RETORNO DE LISTA DE INFORMAÇÃO DO BANCO DE DADOS');
    console.log('get')
}

function gravarDados(requeste, response){
    response.send('Metodo utilizado para salvar informações');
}

function atualizarDados(request, response){
    response.send('Metodo utilizado para substituir informações');
}

function deletarDados(request, response){
    response.send('DELETADOOOOO!');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
}