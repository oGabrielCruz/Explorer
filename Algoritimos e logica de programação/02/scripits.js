/*
    Capturar 2 numeros e fazer as operaçoes matematicas de 
    Soma
    Subtração   
    Multiplicação  
    Divisão
    Resto da Divisão

    E pra cada operação mostrar um alerta com o resultado.
*/

let numberOne = Number(prompt('Digite o primeiro Numero:'))
let numberTwo = Number(prompt('Digite o segundo Numero:'))

// numberOne = Number(numberOne)
// numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('O resultado da soma é ' + sum)
alert('O resultado da subtração é ' + sub)
alert('O resultado da multiplicação é ' + multi)
alert('O resultado da divisão é ' + div)
alert('O resultado do resto da divisão é ' + restDiv)