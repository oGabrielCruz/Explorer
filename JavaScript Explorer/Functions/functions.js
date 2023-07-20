console.log('Aula sobre functions')

//Criar um aplicativo de frases motivacionais


//Declaração
function Frases() {
    console.log('Acredite em si mesmo e em todo o seu potencial. Você é capaz de conquistar tudo que deseja.')
    console.log('O sucesso não é um acidente, mas sim o resultado de trabalho duro, dedicação e perseverança.')
    console.log('A vida é cheia de desafios, mas cada desafio é uma oportunidade para crescer e se tornar uma versão melhor de si mesmo.')

}
//Como executar a função
Frases()






//function expression
//function anonymous

//parametros
// const sum = function(number1, number2){
//     console.log(number1 + number2)
// }

// const subtracao = function(number1, number2){
//     console.log(number1 - number2)
// }
// const divisao = function(number1, number2){
//     console.log(number1 / number2)
// }
// const multiplicacao = function(number1, number2){
//     console.log(number1 * number2)
// }
// sum(2, 3)  // arguments
// subtracao (5,6)
// divisao(3,8)
// multiplicacao(9,12)

const sum = function(number1, number2) {
    let total = number1+number2
    return total//precisa desse retuns para retornar o valor, para a soma não dar undefined lá embaixo
}
let number1 = 30
let number2 = 20

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)



//Modo facil de entender
// Função é um liquidificador
function fazerSuco (fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maçã')
console.log(copo)



//Function scope
let subject = 'create video'
function  createThink(subject){
    subject = 'study'
    return subject
}
console.log(createThink(subject))
console.log(subject)



//function hoinsting

sayMyName()

function sayMyName(){//isso é mais poderoso que var
    console.log('Biel')
}



// arrow function

const sayMyName = () => {
    console.log('Biel')
}
sayMyName()




// callback function

function sayMyName(name){
    console.log('antes de executar uma callback')

    name()

    console.log('depois de executar a callback')
}
sayMyName(
    () => {//function
        console.log('estou em uma callback')
    }
)



/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk)
console.log(joao.walk())