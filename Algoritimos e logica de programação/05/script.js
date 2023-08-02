/*
    **Jogo da Adivinhação**
    
    Apresente a mensagem ao usuário:
    "Adivinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado
    pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adbinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/
const aleatorio = Math.floor(Math.random() * 11)
console.log(aleatorio)
let result = undefined

for (let tentativas = 0; aleatorio != result; tentativas++ ){
    result = Number(prompt("Adivinhe o número que estou pensando? Está entre 0 e 10"))
    if(aleatorio == result){
        alert("Parabéns, Você acertou em " + tentativas + " Tentativas")
    }

    else{     
    alert("Tente novamente")
    }
}
    
