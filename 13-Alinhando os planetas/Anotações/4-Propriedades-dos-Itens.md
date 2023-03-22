# Aula 1 (Largura e altura dos itens com flex-basis)

    - flex-basis: A propriedade flex-basis define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído.
    - O valor inicial desta propriedade é auto — neste caso o navegador observa se os itens possuem o mesmo tamanho.
# Aula 2 (Crescimento e adaptação dos itens)

    - flex-grow: O crescimento do intem dentro do container em relação os espaços vazios. 
    - Com esse comendo é possível atribuir tamanhos diferentes para cada elemento no container:
        exemplo: 
            .box{
                display: flex;

                border: 1px dashed red;
            }
            .box div{
                border: 1px solid;
            }
            .box div:nth-child(2),
            .box div:nth-child(3){
                flex-grow: 1; // Atribuiu para os filhos/itens 1 e 2 o tamaho 1
            }
            .box div:nth-child(3){
                flex-grow 2 // Atribuiu para o filho/item 3 o tamanho 2 
            }
    - Eles se dividem em espaços iguais no container.
# Aula 3 (Encolhimento e encaixe dos elementos)

    - flex-shrink: O encolher do item dentro do container.
    - Funciona basicamente como o flex-grow, mas sua função é o oposto.
# Aula 4 (Shorthand flex)

    - flex:
        - shorthand
        - flex-grow flex-shrink flex-basis
        - Podem ter 1, 2 ou 3 valores na mesma linha. Valores equivalentes aos "flex-grow flex-shrink flex-basis".

# Aula 5 (Alterando tamanho de múltiplos itens)
    
    - Aula ensinando a utilização na pratica dos elementos flex.
    - Link da aula: https://app.rocketseat.com.br/discover/course/flexbox/propriedades-dos-itens/alterando-tamanho-de-multiplos-itens.
# Aula 6 (Ordenando itens)

    - order: Serve para ordenar elementos dentro de um container.
    - É apenas um elemento visual, não altera o HTML.