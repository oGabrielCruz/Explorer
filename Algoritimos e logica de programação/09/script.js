/*
    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;


    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/
let n1 = Number(prompt("Digite o primeiro numero: "))
let n2 = Number(prompt("Digite o segundo numero: "))

soma = n1+n2
subtracao =n1-n2
multiplicacao =n1*n2
divisao =n1/n2
restoDivisao = n1%n2


alert("A soma dos dois numero é "+soma)
alert("A subtração dos dois numeros é "+subtracao)
alert("A multiplicação dos dois numeros é "+multiplicacao)
alert("A divisão dos dois numeros é "+divisao)
alert("O resto da divisão é "+restoDivisao)
if (restoDivisao == 0){
    alert(`Esse Numero é par`)
}
else{
    alert("Esse numero é impar")
}

if (n1 == n2){
    alert("Esses numeros são iguais")
}
else{
    alert("Esses numeros são diferentes")
}