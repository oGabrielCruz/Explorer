/*  - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno 
           obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
let aluno = prompt("Qual é o nome do aluno?")
let n1 = Number(prompt("Nota 1:"))
let n2 = Number(prompt("Nota 2:"))

result = (n1 + n2) / 2

if(result >= 7)
    alert(`Sua nota foi ${result} parabéns você passou`)
else{
    alert(`Sua nota foi ${result} Você reprovou`)
}    
