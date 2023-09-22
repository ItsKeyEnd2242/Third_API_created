// importar pacote express
const app = require('./app');
//importar a porta do servidor
const PORT = app.get('port')

//TODOS OS METODOS PELA URL

//metodo get
app.get('/api', (request, response) => {
    response.send('poggers!');
    response.log('poggers!');
});


//metodo post
app.post('/api', (request, response) => {
    response.send('');
    response.log('Metodo utilizado para salvar informações');
});


//metodo put
app.put('/api', (request, response) => {
    response.send('Metodo utilizado para substituir informações');
    response.log('Metodo utilizado para substituir informações');
});

//metodo delete
app.delete('/api', (request, response) => {
    response.send('DELETADOOOOO!');
    response.log('DELETADOOOOO!');
});


// testar o servidor
app.listen(PORT, () => console.log(`Running at the port ${PORT}`));
