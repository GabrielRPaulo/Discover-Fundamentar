# Aula 1 (Adicionando eventos via HTML)

    - A DOM é direcionada a eventos
    - Oque é eventos ?? É as ações do usuárop na página, por exemplo: clicar, arrastar, doubleclick etc...
    - Na DOM as funções do envento se dão apartir de uma atribuição de valor, por exemplo: onclick (detecta se o usuário clicou), ondblclick(quando da 2 clicks) etc...
    - Como atribuir no código:
        *   <h1 onclick="print()"> Salve <h1> // no HTML

            function print() {
                console.log('print'); // Toda vez que clicar no 'Salve' vai desparar no console o 'print'
            }
    - E no próprio JS já possui diversos tipos de 'on'
# Aula 2 (Eventos de teclado)

    - const input = document.querySelector('input') // Usa o elemento input pois é nele é uma das maneiras de observar os eventos de teclado.
    - input.onKeydown = function() {
        console.log('rodei') // toda vez que precionar alguma tecla ativará a function.
    } // Outros eventos: onKeyup (toda vez que a tecla subir ativará a fuction). onKeypress(toda vez que apertar a trcla irá rodar a funcion)
# Aula 3 (Adicionando eventos via JS)

    - const h1 = document.querySelector('h1'); // Chamando o elmento do HTML que deseja aplicar o evento.
    
    - h1.addEventListene('click', print) // addEventListene é uma função que recebe dois argumentos, a ação/evento que deseja realizar e a função que ele vai execultar

    - function print() {
        console.log('print')
    } // exemplo de função
# Aula 4 (Adicionando eventos via JS // outro método)
    
    - h1.onclick = print; // O problema desse método é que caso coloque outro "h1.onclick = xx", irá ignorar o outro evento. Logo a maneira mais indicada para realizar o evento é utilizando o 'addEventListene'

    - function print() {
        console.log('print')
    } // exemplo de função
# Aula 5 (Argumento event)

    - Ele imprime que tipo de evento está sendo realizado (KeybordEvent ou MouseEvent), nele podemos pegar o código da tecla digitada ou até mesmo qual a tecla digitada (event.Key) ou o alvo do evento/ onde ele acontece, no caso da aula é a tag input.
    
    - Link da aula: https://app.rocketseat.com.br/discover/course/pilotando-com-a-dom/eventos/argumento-event