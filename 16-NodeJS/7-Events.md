# Aula 1 (Event Module)

- É um mecanismo para :
    * Disparar enventos.
    * Ouvir eventos.
    * Fazer alguma ação quando ouvir eventos.
    * É a base para muitos outros módulos como: http, stream, file system, entre outros.
- O que vai ser passado nesse novo módulo ?
    * Utilizar os eventos. 
    * Disparar eventos. 
    * Ouvir os eventos.
    * Executar ações para determinados eventos.  
    * Entender como ele é a base para outros módulos.
# Aula 2 (Event Emitter)

- Os eventos fazem parte do core do NodeJS.
- Para olhar oque tem dentro do `events` basta utilizar :
    const events = require('events')

    console.log(events) -> E no terminal rodar `node 'nome do documento que ele está'`
- EventEmitter é uma função do estilo classe e para observar o que o compõe basta uzar:
    const {EventEmitter} = require('events')

    const ev = new EventEmitter()

    console.log(ev)
# Aula 3 (Emitindo eventos)

- Na ultima aula foi ensinado como criar um evento
- Para disparar eventos basta uzar:
    const {EventEmitter} = require('events')

    const ev = new EventEmitter()

    ev.emit('saySomething') -> Caso execulte o código agora nada vai acontecer pois nada esta ouvindo o evento emitido.
# Aula 4 (Ouvindo e executando ações para eventos)

- Para um evento funcionar precisa de algo ouvindo.
- Para ouvir o evento ele precisa está ligado em algum lugar.
    * No caso do código passado :
    const {EventEmitter} = require('events')

    const ev = new EventEmitter()

    ev.on(saySomething) -> Esse é o ouvido dos eventos.

    ev.emit('saySomething')
    ev.emit('saySomething')
- Mas não adianta ele ouvir se não possui nenhuma ação para ser realizada.
- Para execultar a ação: 

    const {EventEmitter} = require('events')

    const ev = new EventEmitter()

    ev.on('saySomething',(message) => {console.log('Eu te escutei ', message)
    }) -> Foi atribuido uma função para execultar o evento, nesse caso é a mesagem no console.

    ev.emit('saySomething', "Gabriel")
    ev.emit('saySomething', "Mayiara")
# Aula 5 (Ouvindo eventos uma única vez)

- Além do `on()` que está sempre ouvindo, tem o `once()` que será uma única vez.
# Aula 6 (Herdando do EventEmitter)

- Como ele é a base para outros módulos ?
    const { inherits } = require('util') -> Essa função vai herdar as funcionalidades do 'EventEmitter' para o 'function Character'.
    const { EventEmitter } = require('events')

    function Character(name) {
        this.name = name
    } -> Quando execultada quero que traga as opções que tem dentro do 'EventEmitter'.

    inherits(Character, EventEmitter)

    const chapolin = new Character('Chapolin')
    chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

    console.log('Oh! E agora quem poderá me defender?')
    chapolin.emit('help')



