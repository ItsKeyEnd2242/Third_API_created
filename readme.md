#Documentação da API
* abrir no tarminal do gitbash
Definir local do computador para criar a pasta do projeto:

    Mkdir Nome_do_Projeto
***
Acessar a pasta do projeto:

    cd Nome_Projeto
***
abrir pasta no vscode:

    code .
***
iniciar o gerenciador de pacotes do Node:

    npm init -y
***
criar arquivo .gitignore:

    touch .gitignore
***
criar arquivo .env: armazenara as variaveis do ambiente:

    touch .env
***
instalar pacotes da API:

    npm i express nodemon dotenv
***
* express: será o servidor da api
* nodemon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente

informar arquivos no .gitignore:

    node_modules
    .env
***
criar pasta src para estrutura do projeto:

    mkdir src
***
Criar arquivo server.js na pasta src:

    touch src/server.js
***
    Abrir o arquivo e em seguida trazer o pacote para este arquivo
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
***

criar comando para rodar o servidor(no package.json):
    "start":"nodemon src/server.js"
***
Executar no gitbash:
    npm run  start
***
Enviar para o repositorio criado na conta do seu github:
    
    git init
    
    git add .
    
    git commit -m "comentario"
    
    git status
    
    git remote "URL do repositorio criado"                   ~remova esta esclamções do link~
    
    git branch -M main
    
    git push -u origin main
***
* Feito!!!

## Criar estrutura para o trabalho

(Criar arquivo app.js na pasta src):
```

touch src/app.js
```

## Rodar o comando 'npm instal' sempre que fizzer um clone do github

## Criar o arquivo .env e o .env.example

````
touch .env
````

* Criar arquivo para salvar as variaveis necessarias da aplicação sem os valores.

````
touch .env.example
````

 *Criar arquivo crudRouter
````
nano crudRouter.js
````

### ctrl + o: salvar o arquivo
### Enter: confirmar nome do arquivo
### Ctrl + x: Fechar o arquivo

* Digitar o código no arquivo criado
````
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
````


### CRIAÇÃO DE CONTROLES
* arquivos para processar as requisições das notas


    <br>

### CRIAR PASTA DE CONTROLLERS

````
mkdir src/controllers
````

### CRIAR ARQUIVO CONTROLLER

````
touch src/controllers/controller.js
````

