# Aula 1 (parentElement e parentNode)

    - Navegando pelos elementos.
    - parentNode e parentElement.

    - Primeiro pega o elemento:
        *   const body = document.querySelector('body')

        *   console.log(body.parentNode) // Vai pegar todo o body e imprimir no cosole
        *   console.log(element.parentElement) // Vai pegar todo o elemento
# Aula 2 (Pegando elementos filhos) 

    - childNodes e children

    - Primeiro pega o elemento:
        *   const body = document.querySelector('body')

        *   console.log(body.childNodes) // Vai pegar todos os filhos em formato de NodeList, vai mostrar os espaços vazios como 'text'.

        *   console.log(body.children) // Vai pegar todos os filhos no formato 'HTMLCollection', ele já elimina os espaços vazios.

        *   console.log(body.firstChild) // Vai pegar o primero filho do elemento, leva em considerção os espaços vazios.

        *   console.log(body.firstElementChild) // Vai pegar o primeiro filho do elemento, Mas não leva em considerção os espaços vazios.

        *   console.log(body.lestChild) e console.log(body.lestElementChild) // Vai pegar o último filho do elemento.
# Aula 3 (Buscando irmãos)

    -   nextSibling e nextElementSibling 

    -   nextSibling // Vai pegar o proximo irmão, levgando em consideração os espaços vazios.

    -   nextElementSibling // Vai pegar o proximo irmão, mas não leva em consideração o proximo filho.

    -   previusSibling // Vai mostrar o elemento que escolher, mas leva em consideração os espaços vazios.

    - previusElementSibling // Vai mostrar o elemento que escolher, mas não leva em consideração os espaços vazios.