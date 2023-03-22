# Aula 1 (Prototype)

    * Prototype:
        - prototype-based language
        - prototype chain
        - __proto__

    * O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

    * Puxa sempre propriedades/valores do termo mas acima.

    * "Gabriel".__proto__
# Aula 2 (Type conversion/coersion)

    * Type conversion (typecasting) vs Type coersion.

    * Ambas alteram de um tipo de dado para um outro tipo:

        condole.log('9' + 5) -> Irá concatenar : 95 , pois o JS transforma de forma altomática o number "5" em uma string, para evitar erro.

        Pode tambem fazer a troca manualmente: console.log(Number('9') + 5) agora a string virará number, logo o valor a ser dado é 14.
# Aula 3 (Strings em números)

    * Manipulando Strings e Números.

    * Transformando Strings em Números e Números em Strings.

    ->  let string = "727"
        console.log(Number(string))

        let number = 156
        console.log(String(number))
# Aula 4 (Contando caracteres e digitos)

    * Contando quantos caracteres tem uma palavra e quantos dígitos tem um número:

    ->  let word = "abcdefghijklmnopqrstuvwxyz"
        console.log(word.length)

    ->  let number = 1234
        console.log(number.length) // Irá dar undefined, pois number não recebe length. logo...

        console.log(String(number).length) // Irá dar 4 (Número de caracteres)
# Aula 5 (Casas decimais)

    * Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

    let number = 774187413.874189749
    console.log(number.toFixed(2)) // Irá dar 2 casas decimais, pois só especificou 2.

    let number = 774187413.874189749
    console.log(number.toFixed(2).replace("." , ",")) // Irá substituir o "." pela "," . Mas transaformará o valor em String, e se tentar utilizar a tecnica aprendida na Aula 3, irá dar o valor (NaN), pois quando munda o '.' por ',' o JS não reconhece mais o número como número e sim como string:

    let number = 774187413.874189749
    console.log(Number(number.toFixed(2).replace("." , ",")))
# Aula 6 (Maiúsculas e minúsculas)

    * Manipulando strings e números.

        * transforme letras minúscolas em maiúsculas. Faça o contrário disso também.

        let word = "Quero comprar logo as peças do pc 09/01/23"

        console.log(word.toUpperCase()) // maiúsculas.
        console.log(word.toLowerCase()) // minúscolas.
# Aula 7 (Separando strings)

    * Manipulanso Strings e Arrays

    * Separando um texto que contem espaço, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"

        ->  let word = "Quero comprar logo as peças do pc 09/01/23"
    
            let myArray = word.split(" ") // Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços.

            let wordWithUnderscore = myArray.join("_") //  Para juntar esse array é possível usar o método join(""), que juntaria essas palavras sem nenhum separador.
            
            console.log(wordWithUnderscore)
# Aula 8 (Encontrando palavras em frases)

    * Manipulando Strings.

    * Verificar se o texto contem a palavra "peças"

    ->  let word = "Quero comprar logo as peças do pc 09/01/23"

        console.log(word.includes("peças")) // Faz diferênça entre maiúculas e minúculas.
# Aula 9 (Criando array com construtor)

    * Manipulando Arrays.

    * Criando Array com construtor.

        ->  let myArray = new Array('a', 'b', 'c', 'd', 'e', 'F')  // Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores.

            console.log(myArray)
# Aula 10 (Elementos do Array)

    * Manipulando Arrays.

    * contar elementos de um array.

    console.log(["a","b","c"].length) // Para contar a quantidade de elementos em um array pode-se usar o método length.
# Aula 11 (Strings para Arrays)

    * Manipulando Arrays.

    * Transformando uma cadeia de caracteres em elementos de um array.

        let word = "manipulação"

        console.log(Array.from(word).
# Aula 12 (Manipulando Arrays)

    * Manipulando Arrays

        let techs = ["html", "css", "js",]

         -> Adicione um item no fim: 
        techs.push("nodejs")

        -> Aicionar no começo:
            techs.unshift("sql")

        -> Remover do fim: 
            techs.pop() // sempre remove o do fim, sem precisar explicar qual deve ser tirado.

        -> Remover do começo:
            techs.shift() // sempre remove o do começo, sem precisar explicar qual.

        -> Pegar somente alguns elementos do Array:
            console.log(techs.slice(1, 3)) // Recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições.

        -> Remover um ou mais items em qualquer posição do Array:
            techs.splice(0, 1) // Que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover.

        -> Encontrar a posição de um elemento no Array:
            let index = techs.indexOf('nodejs') // Encontra qual a posição do elemento que voce escolher.
            techs.splice(index, 1) // Se quiser retirar o elemento que achou.