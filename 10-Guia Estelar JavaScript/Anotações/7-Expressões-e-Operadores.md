# Aula 1 (Expressões e operadores)

    * Expressions // Qualquer linha de código que resolve alguma coisa no JavaScript.

    * Operators //
        - Binary
            let number = 1

            console.log(number + 1)

        - Unary
            let number = 1

            console.log(++number)

        - Ternary
            console.log(true ? 'alo' : 'nada')
# Aula 2 (New)

    * new

        - left-hand-side expression.
        - cria um novo objeto.

        ->  let name = new String('Gabriel')
            name.surName = 'Paulo'
            let age = new Number (20)

            console.log(name, age)

        ->  let date = new Date('2020-12-01')

            console.log(date.__proto__)
# Aula 3 (Typeof delete - Operadores unários)

    * Operadores unários.
        - typeof // Mostra qual o tipo de dado que temos, nesse caso uma string.

            console.log(tyepof "mayk")

        - delete //

            const person = {
                name: 'Mayk',
                age: 25,
            }
            delete person.age

            console.log(person)
# Aula 4 (Operadores aritméticos)

    * Operadores Aritiméticos:
        multiplicação: *
        console.log(12 * 3)

        - divisão: /
        console.log(12 / 3)

        - soma: +
        console.log(12 + 3)

        - subtração: -
        console.log(12 - 3)

        - resto da divisão: %
        let remainder = 12 % 3 // remainder = resto da divisão

        console.log(remainder)

        - incremento: ++
        let increment = 0
        increment++ // Sempre adiciona mais 1
        increment++

        console.log(increment) // Se colocar o 'incremet++' no console.log, só irá acrescentar mais 1 apenas em um proximo 'console.log'. Se colocar o ++incremet no console.log, irá acrescentar mais 1 imediatamente.

        - decremento: --
        let decrement = 0
        decrement-- // Sempre subtrai mais 1

        console.log(decrement) //Se colocar o 'decrement--' no console.log, só irá subtrair mais 1 apenas em um proximo 'console.log'. Se colocar o --decrement no console.log, irá subtrair mais 1 imediatamente.

        - exponencial: ** // Elevado
        console.log(2 ** 7)
# Aula 5 (Grouping operator)

    * Grouping operator ( )

    Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

    let total = 2 + 3 * 5
    console.log(total)
    //com essa precedência, nosso resultado é 17.

    let total = (2 + 3) * 5
    console.log(total)
    // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
# Aula 6 (Operadores de comparação igual a e diferente de)

    * Operadores de comparação

    * Irá comparar valores e retornar um boolean como resposta à comparação.

        let one = 1
        let two = 2

        - == igual a
        - console.log(two == 1) // false
        - console.log(two == 2) // true

        - '!=' // ! + =   diferente de.
        - console.log(one != two)
        - console.log(two != 2)
        - console.log(one != 1)
# Aula 7 (Operadores de comparação estritamente igual e estritamente diferente)

    * === estritamente igual a... =+=+= // ele mostra o valor e o tipo de elemento.
        let one = 1
        let two = 2

        console.log(one === "1") // é false porque o one root é number
        console.log(one === 1)

    * !== estritamente diferente de... !+=+= //

        console.log(two !== "2")
        console.log(two !== 2)
# Aula 8 (Operadores de comparação maior e menor (igual))

    * Maior que ( > )
    let one = 1
    let two = 2

    console.log(one > two) // devolverá um boolean nesse caso é o (false)

    * Maior igual a (> + =)

    console.log(one >= 1)
    console.log(two >= 1)

    * Menor que ( < )

    console.log(one < two)

    * Menor igual a (< + =)

    console.log(one <= two)
    console.log(two <= 0)
# Aula 9 (Operadores de atribuição)* Operadores de atribuição (Assignment)

    * Operadores de atribuição (Assignment)

    let x
    
    
    - Assignment normal:
        x = 1

        console.log(x) // x recebe 1 

    - Addition assignment (adição):
        x += 2

    - Subtraction assignment (subtração):
        x -= 1

    - Multiplication assignment (multiplacação):
         *= 2

    - Division assignment (divisão):
        x /= 2

    - Exponetiation assignment (exponenciação):
        x **= 2

    - Remainder assignment (resto de divisão):
        x %= 2
# Aula 10 (Operadores lógicos)

    * Operadores lógicos (logical operators)

    - dois valores booleanos, quando analizados, resultarão em verdadeiro ou falso.

    let pao = true
    let queijo = true

    - AND && ( e )

     console.log(pão && queijo)

    - OR || ( ou )

     console.log(pão || queijo)

    - NOT !(troca de valor quando posto na frente de uma variável)

     console.log(!pão)
# Aula 11 (Operador condicional ternário)

    * Operador condicional (ternário)

     - Dependendo da condição, recebe valores diferentes.

     - (Condição) então valor 1 se não valor 2.
     - condition ? value 1 : value 2
    * Exemplos:

     - Café da manhã top.
        let pão = true 
        let queijo = true

        const niceBreafest = pão && queijo ? 'café da manhã top' : 'café da manhã ruim'

        console.log(niceBreafest) // o resultado variará de acordo com a condição (ter queijo e ter pão)

     - Maior de 18.

     let age =13
     const canDrive = age >= 18 ? 'Can drive' : "can't Drive" // Se 'age' for menor que 18, não pode dirigir 

     console.log(canDrive)
# Aula 12 (Operadores para string)   

    * Operadores de strings

    - Operador de comparação ( = + = )

        console.log('a' == 'b') // 'Igual á'

    - Concatenação ( + )
        let alpha = 'alpha'
        console.log('alpha' + 'bet' + 's') // vai juntar tudo em uma linha 'alphabets'
# Aula 13 (Falsy e truthy)

    * Type conversion (typecasting) vs Type coersion

        console.log(number('9') + 5) // precisa relembrar para entender Falsy e Truthy.

    * Falsy (Quando um valor é considerado falso em contextos que onde um booleano é obrigatório {condicionais e loops}).

        Todos os valores abaixo seriam representados como false em um boolean.

		false
        0
        -0
        ""
        null
        undefined
        NaN

        console.log( NaN ? 'verdadeiro' : 'falso' )

    * Truthy (quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório {condicionais e loops})

        Todos os valores abaixo seriam representados como false em um boolean.
		true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
    
        console.log( Infinity ? 'verdadeiro' : 'falso' )
# Aula 14 (Precedência dos operadores)

    * Quais operadores são os mais importantes quando apresentados em uma expressão

     De cima para baixo, do mais importante ao menos importante.

     - grouping                      ( )
     - negação e incremento          ! ++ --
     - multiplicação e divisão       * /
     - adição e subtração            + -
     - relacional                    < <= > >=
     - igualdade                     == != === !==
     - AND                           && 
     - OR                            ||
     - condicional                   ?:
     - assignment (atribuição)       = += -= *= %= 