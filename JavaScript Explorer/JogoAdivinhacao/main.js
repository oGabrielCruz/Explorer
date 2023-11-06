let randomNumber= Math.round(Math.random() * 10 )
let xAttempts = 1

function botaoTentativa(event){
    event.preventDefault()

    const inputNumero = document.querySelector("#inputNumero")
    
    if(Number(inputNumero.value) == randomNumber){
        document.querySelector(".tela1").classList.add("hide")
        document.querySelector(".tela2").classList.remove("hide")

        document.querySelector(".tela2 h2").innerText = `Você acertou em ${xAttempts} Tentativas`

        
    }
    if(Number(inputNumero.value) > 10){
        alert("O numero não pode ser maior que 10")
    }
    if(Number(inputNumero.value < 0)){
        alert("O numero não pode ser menor que 0")
    }
    inputNumero.value= ""
    xAttempts ++
}

function botaoNovamente(event){
    event.preventDefault()

    document.querySelector(".tela2").classList.add("hide")
    document.querySelector(".tela1").classList.remove("hide")

    randomNumber=Math.round(Math.random() * 10 )
    xAttempts = 1
    
}