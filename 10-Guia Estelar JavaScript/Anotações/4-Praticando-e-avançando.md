# Aula 1 (Declaration assignment var)

    * Variáveis e tipos de dadosl.
    * Declaração or Declaration.

    -> var name

    * Assignment or Atribuição de valor.

    -> name = "Gabriel"

    * Que tipo de dado foi colocado na variável

    -> console.log(typeof name) = "String" nesse caso.
# Aula 2 (Agrupando declarações)

    * Agrupando variáveis:

    -> let age, isHuman
    isHuman = true
    age = 20

    * Para testar todas as variáveis :

    -> console.log(age, isHuman) // separando-as por virgulas
# Aula 3 (Concatenando e interpolando variáveis)

    * Escrita de texto + variáveis:

    - Conectando valores.
    -> console.log('O ' + name + ' tem ' + age ' anos.')

    * Interpolando valores com template literals or template strings:

    -> console.log(`O ${name} tem ${age} anos.`)
# Aula 4 (Objects)

    const person = {
        name: 'Gabriel',
        age: 20,
        weight: 90.8,
        isAdmin: true
    }

    -> console.log(person) = Vai aparecer todos os valores das propriedades.

    -> console.log(person.name) = Vai aparecer apenas a propriedade escolhida "name".

    -> console.log(`O ${person.name} tem ${person.age} anos.`) = Vai aparecer a concatenação das variaveis escolhidas. "name" "age".
# Aula 5 (Arrays)

    const animals = [
        'Monkey',
        'Cat',
        'Lion'
    ]

    * Como acessar valores dentro do Array ??

    -> console.log(animals) = Vai aparecer todos os valores das propriedades e os números respectivos de cada propriedade de 0 até a ultima propriedade.

    -> console.log(animals[0]) = Vai buscar a prop do valor atribuido, que neste caso é '0' logo irá buscar o valor "Monkey". Se atribuir um valor o qual não possui uma prop, irá receber "undefined".
# Aula 6 (Exercícios)

    let name = "Gabriel"

     let age = 20 

    let stars = 12.6

    let isSubscribed = true 

    let student = {
    name: "Gabriel",

    age: 25 ,

    stars: 12.6,

    isSubscribed: true,
    
    weight: 92
} 

    let Alisson = {
    name: "Alisson",
    age: 25,
    weight: 92,
    isSubscribed: true
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

    let students = [
    student,
    Alisson
]

    console.log(students)

    console.log(students)