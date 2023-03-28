# Aula 1 (Conhecendo as variáveis)

    * Variaveis:
        * Nomes simbólicos para rececber algum valor
        * Atalho de código
        * Identificadores
        * 3 palavras reservadas para criar uma variável
            * var
            * let (Parece muito com a var)
            * const (Não é multável)

            //var

            var clima = "Quente"
            clima = "Frio"
            console.log(clima)

# Aula 2 (Tipos dinâmicos)

    * O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

# Aula 3 (Scope e var)

    * O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

    * Block statement
        * Vamos iniciar o bloco
            {
                Aqui dentro é um bloco e posso colocar qualquer código
            } Aqui fecha o bloco

            O bloco, também criará um novo escopo. chamado de "block-scoped"

        * var
            var é global e poderá funcionar fora de um escopo de bloco

                console.log('> existe x antes do bloco?, x')

                {
                    var x = 0
                }

                console.log('> existe x depois do bloco ', x)

# Aula 4 (Scope let e const)

    * Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos anteriores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

    * Block statement
        * let (Local e só funciona no local que foi criado, mas consegue mudar o valor de uma constante dentro e fora do escopo).
                let y = 1
            {
                let y = 0 -> Se escrever assim : y = 0 o valor de 1 da primeira let será atualizado para 0.

                console.log('> existe y antes do bloco?', y)
            }

                console.log('> existe y depois do bloco ', y)

        * const (Local e só funciona no local que foi criado, mas não consegue mudar o valor de uma constante dentro e fora do escopo deve criar valores para a const em todos os escopos que ele for utilizada).

# Aula 5 (Nomeando variáveis)

    * JS é case-sensitive (sensível à letras maiúsculas e minúsculas)
    * JS aceita a cadeia de caracteres Unicode (podendo receber acentuações)

    -> Posso:
        * Iniciar com caracteres especiais: $ _ ...
        * Iniciar com letras.
        * Colocar acentuações.
        * Letras maículas e minúsculas fazem a diferença.

    -> Não posso:
        * Iniciar com números
        * Colocar espaços vazios no nome

    -> Ideal:
        * Criar nomes que fazem sentido
        * Que explica o que a variável é ou faz
        * camelCase
        * snake_case
        * Escrever em inglês
