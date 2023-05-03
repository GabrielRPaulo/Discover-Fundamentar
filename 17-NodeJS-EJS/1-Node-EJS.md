# Aula 1 (Criando o HTML)

- O EJS é uma linguagem de modelagem para criar o HTML utilizando JS dentro do Node.
- E tudo vai ser renderizado pelo JavaScript.
- Primeiro precisa criar um HTML e depois passar para EJS.
# Aula 2 (Criando o servidor)

- Apois criar o HTML transforme o documento em `.ejs` para funcionar.
- Para observar o processo em um navegador preciza instalar na sua máquina o `express`, ele tornará possivel observar o aquivo .ejs no "http://localhost" + o número que você queira que seja a chave.
- Apois criar o documento ejs precisa criar uma documento `.js` para rodar o `express` e configurá-lo. Configuração da aula:
    const express = require('express')
    const app = express() -> _Atribuindo o express ao documento_

    app.set('view engine', 'ejs') -> _Informando que a forma de renderizar é com .ejs_

    app.get('/', (req, res) => {
        res.render('index')
    }); -> _Explicando o arquivo que deve ser renderizado, nesse caso é o arquivo 'index'_

    app.get('/sobre', (req, res) => {
        res.render('about')
    });

    app.listen(8080); -> _Especificando em qual localhost ele irá ser execultado_
    console.log("Rodando") 
- Para funcionar deve criar uma pasta `views` e colocar o arquivo que vai ser renderizado dentro dela, nesse caso é o `index`.
# Aula 3 (Separando partes do layout)

- Caso o projeto tenha outras páginas e você não queria repetir varias vezes as estilizaçãos, basta `criar documentos.ejs` das partes que deseja repetir em outra página.
- No caso do vídeo separamos o header, head e o footer. Apos criar o documento de cada um retire as partes da página principal que deseja reutilizar e coloque em cada documento. _Crie os documentos na pasta views_
- Para linkar as partes com outras páginas basta utilizar o comando `<%- include('nome da parte')-%>`.
- Código do vídeo:
    <!DOCTYPE html>

        <%- include('head'); %>
        
        <html lang="pt-br">
            <body class="container">

                <%- include('header'); %>

                <main>
                    <div class="jumbotron">
                        <h1>Node com EJS</h1>
                        <p>Aprendendo a trabalhar com arquivos EJS</p>
                    </div>
                </main>           

                <%- include('footer'); %>

            </body>
    </html>
- Caso tenha que atualizar alguma informação em um documento `.js` deve parar a aplicação e rodar novamente. Mas o ejs não precisa.
# Aula 4 (Nova página e menu)

- Para criar uma nova página deve inserir na pasta `view` um novo documento com o nome da nova página .ejs .
- Para ele funcionar você ja deve colocar a nova página no documento onde o express está rodando. No caso do vídeo :
    app.get('/sobre', (req, res) => {
    res.render('about')
    }); -> _Introduzindo a nova página sobre_
- Para observar a nova pagina deve colocar na barra de buscas ao lado do localhost uma '/' e colocar o nome da página que é 'sobre' no caso da aula.
- Apois isso basta estilizar a nova página.
# Aula 5 (Views e partials - Organização)

- Organizando os arquivos (Um são páginas outros são partes de layout etc.)
- E organizando as chamadas no express, já que mudou os documentos de pastas.
# Aula 6 (Passando um objeto para o ejs)

- O ejs permite que passe os objetos para determinada página especifica.
- No vídeo foi feito um marcador de págna, na página sobre aparece embaixo do 'EJS' 'página: sobre'. E foi feito dessa maneira :
    <%- include('../partials/header', {pagina: 'sobre'}); %>
- Mas para funcionar você deve definir oque acontecerá se alguma página não utilizar esse objeto. Essa definição será no ejs utilizado, no caso do vídeo:
    <p>Página: <%= typeof pagina != 'undefined' ? pagina :'Home' %></p> 
# Aula 7 (Foreach)

- O forEach é um método de loop disponível no Javascript, e que também pode ser utilizado no EJS. Ele permite percorrer os itens de uma array e executar uma determinada ação para cada item.
- Para utilizar o forEach no EJS, você pode passar a array para o template como variável e, em seguida, percorrê-la usando a sintaxe do forEach. Veja um exemplo abaixo:
    * <ul>
  <% minhaArray.forEach(function(item) { %>
    <li><%= item %></li>
  <% }); %>
    </ul>
- este exemplo, a array "minhaArray" é percorrida usando o forEach, e para cada item da array, é gerada uma tag de lista com o valor do item. O símbolo "<%" indica o início de um bloco de código EJS, enquanto o símbolo "<%=" é usado para imprimir o valor de uma variável na página.