# Aula 1 (Alterando estilos com style)

    - Primeira coisa é pegar o elemento:
        * const element = document.querySelector('body')

          element.style.backgroundColor = "#ffffff" // Como é no js e não no css escreve assim 'backgroundColor' no css escreve assim 'background-color'
    - Pode usar qualquer propriedade css.
# Aula 2 (classList) 

    - Primeira coisa é pegar o elemento:
        *   const element = document.querySelector('body')

    - Alterando estilos com classList:
        *  cosole.log(element.classList) // Vai aparecer um tipo de dado chamado "DOMTokenList" 
    
    - Depois de pegar a lista de classes chama o elemento que quer mudar:
        *   element.classList.add('') // Vai adicionar uma classe, pode adicionar mais de uma, basta adcionar uma ',' e colocar outra.
        *   element.classList.remove('') // Vai remover uma classe
        *   element.classList.toggle('') // Ele vai pesquisar a classe que você escolher, se ela existir ele tira se ela não existir ele add.
