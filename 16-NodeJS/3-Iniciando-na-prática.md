# Aula 1 (Executando o primeiro arquivo e entendendo globals)

    - Abrindo o primeiro diretórios
    - Para utilizar o terminal, tem que criar uma pasta .js e no caso do windows deve selecionar o terminal no modelo 'git bash' pois traz condições Unix para poder trabalhar.
    - Precisa está no diretório .js para funcionar
    - Para olhar as funções globais do node basta colocar no console.log a palavra "global" e rodar no terminal do node "node console".
# Aula 2 (O que são e como utilizar módulos?)

    - Para saber qual é o diretório que o arquivo está execultando
    utiliza-se a variável global (__dirname)
    - Para saber o caminho e o nome do arquivo utiliza-se a variável global (__filename)
    - Função "require" é a maneiras de chamar módulos que já são nativos do NodeJS
        * Por exemplo: console.log(require('path'))
        * O 'path' é um módulo do NodeJS
# Aula 3 (Criando módulos)

    - Para criar um módulo e exporta-lo 
    - Para exportar um módulo que está em outra pasta deve utilizar a função "exports" e na pasta que deseja utiliza-lo deve chamar assim :  const myModule = require('./nome da pasta que ele se encontra')
# Aula 4 (Pegando informações do processo)

    - A função process em Node.js é um objeto global que fornece informações e controle sobre o processo atual do Node em execução. Alguns exemplos de uso da função process são:

        * Obter informações sobre o ambiente de execução: Você pode usar o objeto process para acessar informações sobre o ambiente em que o processo Node está sendo executado, como a versão do Node, o sistema operacional, as variáveis ​​de ambiente, entre outras informações.

        * Controlar o fluxo do processo: Você pode usar o objeto process para controlar o fluxo do processo Node em execução, como encerrar o processo, interromper o processo ou reiniciar o processo.

        * Comunicar-se com o processo pai: Se o processo Node foi criado por outro processo, você pode usar o objeto process para se comunicar com o processo pai por meio de um canal de comunicação bidirecional.

        * Configurar variáveis de ambiente: Você pode usar o objeto process para definir ou modificar as variáveis de ambiente do processo Node em execução.

    - Em resumo, a função process é um objeto global útil para acessar informações e controlar o processo Node em execução.
# Aula 5 (Passando flags como argumento)

    - Uma das de atrbuir um valor no process é utilizando as "flags"
    que são escritas assim no terminal: "--name" -> nesse caso você atribui o valor direto como uma string "Gabriel Paulo".
