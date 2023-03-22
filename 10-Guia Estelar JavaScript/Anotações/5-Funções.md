# Aula 1 (Functions)

    *Serve para repetior o código/Reutilizar.
    * Declaration-declaração da função.
    * Function statement.

    -> function createPhrases() {
        console.log('sabe aquele beijo que')
        console.log('tô tomando ele na balada')
        console.log('co whisky e redbull.')
    }

    * Para executar a função
    * Rodar, chamar, invocar
    * Execute, run, call, invoke

    * Apenas colocar o nome da função mais os "()":

    createPhrases()
    createPhrases()
    createPhrases()
    createPhrases()

    * Podendo repetir quantas vezes quiser.
# Aula 2 (Argumentos e parâmetros)

    * Poder declarar functions dentro de variáveis:

    -> const sum = function(){

    }
        - function expression.
        - function anonymous.
    * Para execultar:

    -> sum()// Mas não irá voltar nada pois ainda não foi atribuido valor a function

    * Para atribuit valores a função dentro da variável:
        // Parâmetros (parameters)

    -> const sum = function(number1, number2){

    }
        sum(2, 3) // com isso foi atribuido os valores nas resoectivas 'casas' number1 = 2, number2 = 3.

    * Para testar que funciona:

    -> const sum = function(number1, number2){
    console.log(number1 * number2) // Só funciona nesse escopo. Se tentar rodar fora irá dar erro.
    }
        sum(2, 3) // Deve aparecer no console o valor '6'
# Aula 3 (Retornando valores dentro da função)

    * Agora se quiser fazer outras contas é só reatribuir os valores da variavel 'sum', que está na aula passada. Com isso irá reutilizar o código sem reescrevelo por completo.
    ->  const sum = function(number1, number2){
        console.log(number1 * number2)
        }
        sum(2, 3) // só reatribuir outros valores aqui. - O nome desses valores são denominados 'arguments - argumentos'

    * Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada 'return' seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

    -> const sum = function(number1, number2){
        console.log(number1 * number2)
        }

        let number1 = 39 // É diferente do number1 de dentro da const
        let number2 = 54 // É diferente do number2 de dentro da const

        sum(number1, number2) // Vai realizar a função de dentro da const, mas com os novos valores de fora.

        exemplo:
        -> console.log(`O número 1 é ${number1}`)
           console.log(`O número 2 é ${number2}`)
           console.log(`A multiplicação é ${sum(number1, number2)}`) // A multiplicação irá dar 'undefined' pois quando é invocada a função 'sum' o programa roda o console.log que está dentro da const que é = '2106', depois que irá retornar a expressão 'A multiplicação é undefined', pois a função não possui a palavra chave 'return'.

    * Função da palavra chave 'return' : na cost sum que possui a function dentro dela possui um console.log que faz com que quando a função é rodada retorne primeiro o console.log. Mas quando a é atribuido a palavra chave 'return' pode-se tirar o console.log e apenas atribuir um valor para 'return'.

        exemplo:
        ->  const sum = function(number1, number2){
            console.log(number1 * number2) // depois do return:  let total = number1 * number2
            return total // Atribuido agora
        }

            let number1 = 39
            let number2 = 54

            console.log(`O número 1 é ${number1}`)
            console.log(`O número 2 é ${number2}`)
            console.log(`A multiplicação é ${sum(number1, number2)}`)
# Aula 4 (Outra maneira de entender funções)

    * "Função é um liquidificador"

    -> function fazerSuco(fruta1, fruta2) {
        return 'suco de: ' + fruta1 + fruta2
    }

    const copo = fazerSuco('banana', 'maçã')

    console.log(copo)
# Aula 5 (Function scope)

    * Functino scope:
        let subject = 'estudar programação'

        function createThink(subject) {
            subject = 'dormir melhor'
            return subject
        }
        console.log(subject) -> vai buscar o primeiro valor
        console.log(createThink(subject)) -> vai buscar o valor novo 'dormir melhor'
        console.log(subject) -> vai buscar o primeiro valor, pois não esta no escopo da function.
# Aula 6 (Function Hoisting)

    * Funções assim sofrem o hoisting:

    sayMyName()

    function sayMyName() {
        console.log('Gabriel')
    } // Função do tipo declaration, sofrem elevação.

    * Funções assim não sofrem o hoisting:

    sayMyName()

    const sayMyName = function() {
        console.log('Gabriel')
    } // Funções com variáveis não sofrem elevação.

    or

    sayMyName()

    var sayMyName = function() {
        console.log('Gabriel')
    } Funções com variáveis não sofrem elevação.
# Aula 7 (Arrow function)

    * Jeito mais moderno de escrever as functions:

    cosnt sayMyName = (name) => {
        console.log(name)
    }

    sayMyName('Gabriel') // forma mais simplificada
# Aula 8 (Callback function)

    * Uma callback function é uma função que está sendo passada para outra função como parâmetro.

    function sayMyName(name) {
        console.log('antes da função callback')

        name()

        console.log('depois da function callbak')
    }

    sayMyName(

        () => {
            console.log('estou em uma callback')
        }
    )
# Aula 9 (Funções construtoras)

    * Function() constructor

        - expressão new
        - criar um novo objeto
        - this keyword

        function Person(name) {
            this.name = name
            this.walk = function() {
                return this.name + " está andando"
            }
        }

        const Gabriel = new Person("Gabreil")
        const Lucas = new Person("Lucas")
        console.log(Gabriel.walk())
        console.log(Lucas.walk())
