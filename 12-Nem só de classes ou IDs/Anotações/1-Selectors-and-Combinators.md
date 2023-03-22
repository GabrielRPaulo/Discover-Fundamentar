# Aula 1 (Seletores)

    * Seletores:
        - Conecta um elemento HTML com um CSS a fim de alterar o elemento.

    * Tipos :
    - Element selector:
        + Todos os elementos HTML
    - Id selector:
        + Um elemento que tenha um atributo 'id'.
        + Cada id deverá ser único.
    - Class selector:
        + Os elementos que contenham um atributo 'class'.
        + Podemos ter uma ou mais classes.
    - Attribute selector:
        + Um elemento que tenha um atributo especifico
    -Pseudo-class selector.
        + Elementos em um estado específico 
    
    * Exemplos dos tipos:

    Element Selector
    
    Todos os elementos HTML
    HTML
    
    <h1>Título da página</h1>
    <p>Conteúdo da minha página</p>
    CSS
    
    h1 {
        color: blue;
        font-size: 60px;
    }
    
    p {
        color: green;
    }
    ID Selector
    
    Um elemento que tenha um atributo id
    Cada id deverá ser único
    Usa-se # para indicar um ID selector
    HTML
    
    <h1 id="title">Título da página</h1>
    <p id="content">Conteúdo da minha página</p>
    CSS
    
    #title {
      color: yellow;
    }
    
    #content {
        color: orange;
    }
    Class Selector
    
    Os elementos com atributo class
    Podemos ter uma ou mais classes
    Usa-se . para indicar um class selector
    Todos os elementos com a mesma class são alterados
    HTML
    
    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>
    CSS
    
    .red {
    color: red;
    }
    
    .big {
        font-size: 3em;
    }
    Attribute Selector
    
    Um elemento que tenha um atributo específico
    HTML
    
    <h1 title="Algum titlulo">Título da página</h1>
    <p title="Conteúdo da página">Conteúdo da minha página</p>
    CSS
    
    [title] {
        color: orange;
    }
    Pseudo-class Selector
    
    Elementos em um estado específico
    HTML
    
    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>
    CSS
    
    p:hover {
        color: red;
    }
    
    h1:hover {
        color: red;
    }
    Múltiplos
    É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.
    
    Usamos uma separação por vírgulas para isso:
    
    h1, p, .title, .title:hover {
        color: red;
    }
# Aula 2 (Combinators)

    * Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

    * Descendant combinator
    Identificado por um espaço entre os seletores
    Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho
    HTML

    <body>
        <article>
            <h2>Um Título</h2>
        </article>
    </body>
    CSS

    body article h2 {
        color: red;
    }
# Aula 3 (Child combinator)

    * Identificado pelo sinal > entre dois seletores
    seleciona somente o elemento que é filho direto do pai
    Elementos depois do filho direto serão desconsiderados
    HTML

    <body>
    <ul>
        <li>Item 1</li>
        <ul>
        <li>Item 2</li>
        </ul>
    </ul>
    </body>


    body > ul > li {
        color: blue;
    }
# Aula 4 (Sibling Combinator)

    * Adjacent sibling combinator
        - Identificado pelo sinal + entre dois seletores
        Seleciona somente o elemento do lado direito que é irmão direto na hierarquia.

    HTML

    <h1>

    Título

    </h1>
    <p>

    Esse é um parágrafo

    </p>

    <p>

    Mais um parágrafo

    </p>

    CSS

    h1 + p {
        color: red;
    }

    * General sibling combinator
        - Identificado pelo sinal ~ entre dois seletores
        Seleciona todos os elementos irmãos.
    HTML

    <h1>
      Título
    </h1>
    <p>
      Esse é um parágrafo
    </p>
    <p>
      Mais um parágrafo
    </p>

    CSS
    
    h1 ~ p {
        color: red;
    }
# Aula 5 (Utilizando combinators)

    * Utilizando os combinadores.
    HTML
    
    <ul>
      <li>Alooo</li>
      <li class="red">Hey</li>
    </ul>

    CSS
    
    ul > li[class="red"] {
        color: red;
    }
    Dica:
    Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
    Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente