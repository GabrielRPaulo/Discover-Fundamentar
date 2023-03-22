# Aula 1 (textContent)

    - Caso você ja tenha tribuido valor a elemento por exemplo, em um h1 você atribuiu o valor 'Salve rapaziada' e deseja mudar seu valor dento do JS, basta utilizar a propriedade 'textContent'.
    - Exemplo : const element = document.querySelector ('h1')
                element.textContent = "Olá Devs!" // Isso mudará o valor de 'Salve rapazida' para 'Olá Devs!' // caso queira concatenar os dois basta utilizar o '+': element.textContent += "Olá Devs!", ficará 'Salve rapazidaOlá Devs!'
# Aula 2 (innerText)

    - Tem a mesma função do textContent.
    - Exemplo : const element = document.querySelector ('h1')
                element.innerText = "Olá Devs!" // mudará o elemento interno do HTML.
# Aula 3 (innerHTML)

    - Troca o conteúdo HTML interno utilizando elementos HTML
    - Exemplo : const element = document.querySelector ('h1')
                element.innerHTML = "Olá Devs! <small>!!!</small" // Troca o elemento interno e ainda atribui o 'small' do HTML nas '!'.
# Aula 4 (Value)

    - Utilizado para manipular o valor da tag input (espaço para preencher/receber valores)
    - Exemplo:  const element = document.querySelector ('input')
                element.value = "Qualquer coisa"
# Aula 5 (Manipulando atributos)

    - Adicionar atributos: const header = document.querySelector ('header')
                           header.setAttribute('id', 'header') // dessa forma se adciona o atributo.
    - Caso queira olhar o atributo adcionado: 
        * const headerID = document.querySelector ('#header')
          console.log(headerID)
    - Caso queira pegar um atributo: console.log(headerID.getAttribute('id')) // imprimirá "header".
    - Caso queira remover um atributo: header.removeAttribute('id') // Removerá o atributo.
