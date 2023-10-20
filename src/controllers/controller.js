function listarDados(request, response){
    response.send('RETORNO DE LISTA DE INFORMAÇÃO DO BANCO DE DADOS');
    console.log('get')
}

module.exports = {
    listarDados
}