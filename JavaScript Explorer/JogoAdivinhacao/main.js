const randomNumber= Math.round(Math.random() * 10 )
let xAttempts = 1

function botaoTentativa(event){
    event.preventDefault()

    const inputNumero = document.querySelector("#inputNumero")
    
    if(Number(inputNumero.value) == randomNumber){
        document.querySelector(".tela1").classList.add("hide")
        document.querySelector(".tela2").classList.remove("hide")

        document.querySelector(".tela2 h2").innerText = `Você acertou em ${xAttempts} Tentativas`

        
    }
    xAttempts ++
}