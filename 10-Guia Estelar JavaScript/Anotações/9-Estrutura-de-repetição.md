# Aula 1 (For)

    * A estrutura de repetição for tem a seguinte sintaxe:
        - for(inicialização de uma variável; condição de continuação para o loop; expressão final)

        -   for(let i = 100; i > 0; i--) {
             if(i === 50) {
                 break;
             }
             console.log(i)
             }
        - break = para a execulção do loop 
        - continue = pula a execução do momento
# Aula 2 (While)

    * let i = 0
    while (i < 10) {
    console.log(i)

    i++;
    }
    * Utilizado quando não se sabe qual é o final do console.
# Aula 3 (For of)

    * Declaração que cria um loop atraves de alguma variável previamente posta.´

    =>  let name = 'Gabriel'

        let names = ['João', 'Paulo', 'Guilherme']

        for (let name of names) {
            console.log(name)
        }
# Aula 4 (For in)

    * Cria um loop em cima de um objeto, pegando as props do objeto

    => let person = {
    name: 'Gabriel',
    age: 20,
    weight: 88.5
    }

    for(let property in person) {
    console.log(property)
    console.log(person[property])
    }