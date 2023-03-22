# Aula 1 (getElementById)

    -getElementById: É uma das formas de buscar elementos do HTML para o JS.
        * Exemplo: document.getElementById('Nome do elemento que você deseja buscar no documento') // Para olhar o elemento basta colocar todo o  document.getElementById() dentro de um console.log .
# Aula 2 (getElementsByClassName)
    
    - Forma de pegar os elementos pelo nome da classe
    - Em um código podem haver varias "class", com isso para pegar a classe que deseja basta usar o getElementsByClassName('Nome da class')
# Aula 3 (getElementsByTagName)

    - Forma de pegar as tags para estilizalas em JS 
    - Exemplos de sua utilização: 
        * getElementsByTagName('h1'), getElementsByTagName('body'), getElementsByTagName('meta').
# Aula 4 (querySelector)

    - Outro busacador de elementos pega pelo seletor que é oque faz pegar o HTML pelo css.
    - Pega o primeiro elemento com o seletor que o programador escolher
        * Exemplo: document.querySelector('meta'), document.querySelector('[src]')
    - Para utilizalo deve utilizar as formas de buscar elementos do css dentro dele 
        * Exemplo: document.querySelector('.one') // caso for class.
        * Exemplo: document.querySelector('#one') // caso for id.
                   
        
# Aula 5 (querySelectorAll)

    - Pega todos os elementos com o seletor que o programador escolheu.
    - Possui todas as caracteristicas do `querySelector` tirando o fato de pegar todos os elementos.
# Aula 6 (Qual usar?)

    - getElementById (element)
    - getElementsByClassName (Tipo de dado: HTMLCollection)
    - getElementsByTagName (Tipo de dado: HTMLCollection)
    - querySelector (element)
    - querySelectorAll (Tipo de dado: Nodelist) // Poder utilizae um 'forEach'
