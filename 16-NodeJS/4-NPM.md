# Aula 1 (NPM)

- NPM: Node Peckege Maneger

__Glossary: Dependencies, Peckages, Modules__ : Significam praticamente a mesma coisa, estaremos colocando pacotes no Node,dependencias e modulos. Ou seja estaremos usando coisa que outras pessoas criaram.

- Verificar se o npm está instalado `npm -v` : se você baixou o node de mareira correta ele irá mostra a versão que você está utilizando.
# Aula 2 (Iniciando um pacote com npm)

- Criando o nosso proprio pacote.
- Utilize `npm init` para isso ou `npm init -y`-> o '-y' irá colocar sim para todas a perguntas da criação do pacote, e irá ser feit automaticamente.
- com ele criado aparecerá um documento chanado`peckage.json`.
# Aula 3 (package.json)

- É um arquivo em modo `json`-> JavaScript Object Notation
- O arquivo criado possui esses argumentos:
    *{
    "name": "16-nodejs", -> Nome do arquivo
    "version": "1.0.0", -> A versão que o seu projeto está
    "description": "", -> Descriação do projeto
    "main": "exports.js", -> O arquivo pricipal que ele irá rodar
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }, -> Ideia de rodar scripts que você rodaria no terminal no npm
    "keywords": [], -> Palavras chaves do projeto
    "author": "", -> Autor
    "license": "ISC" -> O tipo de liceça
    }
# Aula 4 (Dependências de desenvolvimento e atualização)

- Como utilizar módulos de terceiros ??
    * deve utilizar `npm install "nome do módulo"`
# Aula 5 (O que é o diretório node_modules)

- É um diretório criado por terceiros,cheio de informações/dependências que você pode uzar no seu projeto.
- Não deve subir ele para o reposiório, por isso deve criar um arquivo `.gitignore` e colocar `node_modules/` para não subilo
- Você pode deletar o `node_modules` quando quiser e para utilizar de novo basta utilizar o `npm install`, que irá trazer novamente as dependências.
# Aula 6 (package-lock.json)

- É um arquivo 'json' que traz várias informações que não tem importâcia nenhuma para o usuário.
- Não deve modificalo, pois ele serve para mapear as dependências do projeto.
# Aula 7 (Criando e rodando scripts)

- Criando e rodendo scripts no npm.
- utimiza a `package.json` na parte de 'scripts'.
- Para utilizar fiz assim:
    * coloquei "start": "node index.js" na parte script do json e criei a pasta 'index.js' para poder rodar normalmente
    * Na pasta index coloquei um console.log('mensagem de teste') e coloquei no terminal(bash) npm run start ou npm start. obs: Apenas o `start` consegue rodar sem o `run` na frente.




