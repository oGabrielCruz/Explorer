/*
    Solicitar o nome do aluno e as 3 notas do bimestre e 
    calcular a media daquele aluno.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o alino não passou no bimentre, motivar o alino a dar o seu melhor
    na prova de recuperaçã.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
let aluno = prompt('Qual é o nome do aluno? ')
let notaUm = Number(prompt('Nota 1:'))
let notaDois =  Number(prompt('Nota 2:'))
let notaTres = Number(prompt('Nota 3:'))
notaFinal = (notaUm + notaDois + notaTres) / 3
result =  notaFinal > 6
if(result){
    alert(aluno + " passou de ano, parabéns, sua media foi " + notaFinal)
}
else{
    alert(aluno + " reprovou, estude mais para o ano que vem, sua media foi " + notaFinal)
}
