# Aula 1 (Web semântica)    

    O que é a web semântica?

É basicamente adicionar significado à uma linguagem, e no caso do HTML, para dar significado ao conteúdo.

É importante praticarmos, pois no caso de necessitarmos alterar algo na nossa página, saberemos entender melhor como estão organizadas as coisas na estrutura semântica.

Todo site é único, mas existem padrões ou convenções, que identificamos ambas intencional e não intencionalmente, e ao usar uma semântica consistente, ajudamos os user agents a identificar corretamente os elementos e apresentá-los aos visitantes da página.

Também é importante para acessibilidade, pense em alguém que use um leitor de página, por exemplo. Com uma página desorganizada, é difícil fazer um bom uso de nossa página.

Além disso, os motores de busca dão preferência à sites que têm sua semântica em dia, portanto um site bem estruturado é um site melhor encontrado na web.
# Aula 2 (Importância das tags HTML semânticas)

    Falaremos sobre a importância das tags HTML semânticas, pois algumas tags têm significados específicos e orientações claras sobre onde devem ficar na página e o motivo dela existir.

Exemplo:

<p>
Nós (programadores) somos pagos para resolver problemas,
não para memorizar soluções.
												 ─ Mayk Brito
</p>
Com uma melhor semântica:

<blockquote>
Nós (programadores) somos pagos para resolver problemas,
não para memorizar soluções.
												 <cite>─ Mayk Brito</cite>
</blockquote>
Algumas coisas para se ter em mente, é que como autor da página, é sua responsabilidade entender os significados dos elementos, e muitas vezes isso é simples, já que o html não possui um leque gigante de elementos, mas algumas vezes é muito complexo de se entender alguns elementos. Alguns elementos precisaremos usar em todo documento que criarmos, enquanto alguns provavelmente nunca serão usados.

O foco do HTML5 é melhorar a semântica, e nós sempre buscaremos regras e padrões para aprimorar a estrutura do documento.
# Aula 3 (Seções comuns)

    * Além de trabalhar com textos e links no HTML, temos que sempre pensar na estrutura que colocamos no HTML, mas conforme formos crescendo no nosso entendimento, melhor vai sendo nossa estrutura.

Podemos entender algumas estruturas comuns do HTML, por isso vamos falar sobre essas seções comuns que temos entre documentos, mas atenção que nem todas as páginas vão ter todas essas seções.

Cabeçalho <header> :
O cabeçalho do nosso site, o local onde geralmente fica a logo e o menu.

Navegação <nav> :
A navegação do site vai oferecer links para seções do site, o nosso menu. costuma ficar dentro da header, porém pode ficar em outros lugares, como em uma parte lateral, ou na parte de baixo.

Conteúdo principal <main> :
A parte do site aonde vai o conteúdo principal, no caso de um blog, teremos vários artigos, vários posts.

Conteúdo relacionado <aside>:
O conteúdo relacionado é algo que seja relacionado levemente ao nosso conteúdo principal, porém não tanto para ficar lá.

Rodapé <footer>
Onde ficam as informações da parte de baixo da página.

Exemplo básico de como ficaria um HTML semântico:

<body>
    <header>
        logomarca

        <nav>
            <ul>
                <li>item</li>
            </ul>
        </nav>
    </header>

    <main>
        conteúdo principal
    </main>

    <aside>
        parte lateral
    </aside>

    <footer>rodapé</footer>

</body>

Você pode perceber que não está ordenado, como no desenho que o Mayk fez, porém, isso é de ser esperado, já que o HTML trabalha apenas com a parte de informação do nosso site, enquanto o visual fica todo com o CSS.
# Aula 4 (Header)

    * Onde utilizar ??
        - Quando o inicio da pagina, é visto como global
        - Pode ser usado em outros elementos semâticos como articles, section
        - header dentro do header ou footer ??
            + Não pode, pos perde a semântica 
    * Múltiplos headers
        + Se tiver várias sections, pode ter vários headers 
    * Não possui atributos específicos
# Aula 5 (Nav)

    * A tag Nav, esse elemento de navegação, vai servir para representar uma seção da nossa página que vai apontar para outras páginas, geralmente é usada dentro da header, e não necessariamente devam todos os links de sua página estar dentro de uma tag nav, é mais destinada para coisas importantes do site.
    
    Porém, você pode sim ter mais de um nav na sua página, mas pense bem onde você vai deixar esse nav, já que ele é destinado a coisas importantes e especiais da página.
    
    A tag nav não possui atributos específicos, apenas os globais.
# Aula 6 (Main)

    * Onde e por que utilizar ??
        -
    * Não possuem atributos específicos, apenas globais.

    *A tag main é para um conteúdo único da sua página, portanto, você vai utilizá-la apenas uma vez por página, e vai ser colocada direto do body, e não é legal deixar em qualquer outro lugar além de logo depois do body, entendemos a tag main como o foco central da página, o conteúdo principal da aplicação, então geralmente dentro dessa tag, não vamos deixar o nosso menu.

    - Exemplo de um main adequado, de uma página de receitas:

<body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
</body>
Essa estruturação semântica vai nos ajudar com a nossa própria organização, com o nosso CSS, com o Javascript, com o motor de buscas, acessibilidade, entre outros.

A tag main não possui atributos específicos, somente os globais
# Aula 7 (Article)

    * A tag article vai criar blocos de conteúdo que estejam relacionados, exemplo a seguir:

<body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
</body>

No caso do nosso exemplo, teremos receitas, mas também poderia ser de posts de um blog, fotografias, vai depender de o que seu site está fazendo.

A tag article não possui atributos específicos, somente os globais.
# Aula 8 (Aside)

    * Conteúdos levemente relacionados ao conteúdo principal.
        - explicações
        - glossário
        - links extras
        - biografia do autor 
        - informações do perfil
    * Atrobutos : Apenas globais.
# Aula 9 (Footer)

    * Geralmente no final da página.
        - Informações do autor, copyright, contato, sitemap, voltar ao topo.
    * Atributos globais.
    * Abaixo um exemplo de como seria um HTML com footer:

    <article>
        <h1>Sobre nós</h1>
        <p>Formamos um time de profissionais: </p>
    
        <ol>
            <li>Capacitados</li>
            <li>Gentis</li>
            <li>Honestos</li>
            <li>Gentils</li>
        </ol>
    
        <h2>Quem são</h2>
        <ul>
            <li>Harry Hair</li>
            <li>Dora Depiladora</li>
            <li>Massoterapeuta Massa</li>
            <li>Esteticista Ciça</li>
            <li>Pedo Curi</li>
            <li>Bárbara Brabeira</li>
            <li>Cecília (para seus cílios)</li>
        </ul>
    
    </article>
    
    <footer>
        <p>© 2020 Cabeleleila Leila</p>
    </footer>
# Aula 10 (Section) 

    * Onde e por que utilizar ??
        - A tag section serve para colocarmos seções na nossa página HTML, e uma dica de ouro: Geralmente se coloca um título e conteúdo na tag section. Antigamente usava-se uma div para fazer essas divisões e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag section.
    * Apenas atributos globais.

    * Exemplo de uso a seguir:
<main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
    </main>
# Aula 11 (Elementos genéricos não semânticos)

    * Elementos não semâticos, para uso genérico
    -   <div></div>
        Usado se não conseguir achar um elemento de bloco semâtico.
    
    -   <span></span>
        Usado se não conseguir achar um elemento de texto semâtico.
    * Em ambas, use atributos globais como: id e class para entregar maior significado.

