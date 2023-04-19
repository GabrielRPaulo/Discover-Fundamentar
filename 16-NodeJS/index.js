const { inherits } = require('util') // Essa função vai herdar as funcionalidades do 'EventEmitter' para o 'function Character'.
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
} // Quando execultada quero que traga as opções que tem dentro do 'EventEmitter'.

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help')