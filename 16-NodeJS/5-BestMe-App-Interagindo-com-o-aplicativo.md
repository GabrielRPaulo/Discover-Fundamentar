# Aula 1 (O que vamos aprender?)

- Criando um aplicativo chamado "Best me App" -> encontre sua melhor versão.
- Oque vai ser ensinado ?
    * Se comunicar melhor com os processos que estão rodando.
    * [] process.stdout
    * [] process.stdin\
- Assincronismo.
# Aula 2 (Apresentando as perguntas com process.stdout.write)

- Crie um arquivo `index.js`
- `process.stdout.write()`-> Saida padrão do processo
- Código da aula feito no index.js: 

    const questions = [
    "O que aprendi hoje ??",
    "O que me deixou aborrecido ??",
    "O que eu poderia fazer para melhorar ??",
    "O que me deixou faliz hj ??",
    "Quantas pessoas eu ajudei ??",
    ]

    const ask = (index = 0) => {
        process.stdout.write(questions[index] + "\n\n\n")
    }

    ask()
# Aula 3 (Recebendo dados de entrada e assincronismo com process.stdin.on)

- Código feito na aula :
    process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n')
    process.exit()
}) -> irá pegar as questions e imprimir no console para respoder, mas ainda não esta pegando todas as perguntas, apenas a primeira. Apois rodar e colocar o que aprendi ele fecha o process.
# Aula 4 (Lógica para apresentar perguntas e salvar respostas)

- Atualização no código:
    const answers = []
    process.stdin.on("data", data => {
        answers.push(data.toString().trim())
        if(answers.length < questions.length){
            ask(answers.length)
        } else {
            console.log(answers)
            process.exit()       
        }
    }) -> Agora ele pega todas as perguntas, apos respondelas o `console.log(answers)` imprime no console as respostas em um Arrey.
# Aula 5 (Finalizando e revisando)

- Código final: 
    const questions = [
    "O que aprendi hoje ??",
    "O que me deixou aborrecido ??",
    "O que eu poderia fazer para melhorar ??",
    "O que me deixou faliz hj ??",
    "Quantas pessoas eu ajudei ??",
    ]

    const ask = (index = 0) => {
        process.stdout.write("\n\n" + questions[index] + " > ")
    }

    ask()

    const answers = []
    process.stdin.on("data", data => {
        answers.push(data.toString().trim())
        if(answers.length < questions.length){
            ask(answers.length)
        } else {
            console.log(answers)
            process.exit()       
        }
    })



