# Aula 1 (Controle de fluxo da aplicação)

    * O fluxo padrão vai linha a linha executando todas as linhas, mas nós podemos alterar isso com o que vamos aprender neste módulo.
# Aula 2 (If e Else)

    * if ... else
        - if = Estabelece um parâmetro pra uma função e decide oq será mostradro no console.
        - else = É a outra parte do if, caso o parâmetro do if não seja atendido passará para o paramentro do else.
        - else if = É um parâmetro intermediareo dos dois.
        =>  let temperature = 36.9

            if (temperature >= 37.5) {
                console.log('Febre alta')
            } else if (temperature < 37.5 && temperature >=37){
                console.log('Febre moderada')
            } else {
                console.log ('Saudável')
            }
    * Transforme as condicionais em variáveis, que digam o que está fazendo.

        =>  let temperature = 36.9
            let highTemperature = temperature >= 37.5
            let mediumTemperature = temperature < 37.5 && temperature >= 37

            if(highTemperature) {
                console.log('Febre alta')
            } else if(mediumTemperature) {
                console.log('Febre moderada')
            } else {
                console.log('Saudável')
            }
# Aula 3 (Switch)

    * tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.

    =>  let expression = ''

        switch (expression) { // puxa a expressão para o switch
        case 'a': // confere se o valor da expressão é o correto
            console.log('a')
            break // para a execução do switch apenas se verdadeiro
        case 'b':
            console.log('b')
            break
        default: // caso nenhum valor seja o correto, realizará a instrução dentro de si.

            console.log('default')
            break
        }
    * Uma calculadora feita com switch:

    =>  function calculate(number1, operator, number2) {
        let result = 0;

        switch (operator) {
            case '+':
                result = number1 + number2
                break
            case '-':
                result = number1 - number2 
                break
            case '*':
                result = number1 * number2
                break
            case '/':
                result = number1 / number2 
                break
            default:
                console.log('não implementado')
                break
        }

        return result
    }

    console.log(calculate(4, '%', 8))
# Aula 4 (Throw e Try/Catch)

    Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

    Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

    function sayMyName(name = '') {
        if (name === '') {
            throw 'Nome é obrigatório'
        }

        console.log(name)
    }

    Nesse caso, se o nome vier vazio, será disparada uma mensagem.

    Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

    try {
        sayMyName()
    } catch(e) {
        console.log(e)
    }

    console.log('após ao try/catch')
    
    O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.