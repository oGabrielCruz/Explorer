const frases =[
 "Acredite em si mesmo e tudo será possível.",
 "A vida é uma aventura, aproveite cada momento.",
 "Grandes coisas são feitas por pessoas que se arriscam.",
 "A sorte favorece os corajosos.",
 "Aprenda com o passado, viva o presente, sonhe com o futuro.",
 "A paz interior é o maior tesouro que você pode possuir.",
 "Seja a mudança que você quer ver no mundo.",
 "As melhores coisas da vida não podem ser compradas.",
 "A felicidade está na jornada, não no destino.",
 "Nunca desista, pois a vitória pode estar ao virar da esquina."
]
const indice = Math.floor(Math.random() * frases.length);
const fraseAleatoria = frases[indice];
const elemento = document.querySelector('#frase-aleatoria');
elemento.textContent = fraseAleatoria;

function biscoito(event){
    event.preventDefault()

        document.querySelector(".tela1").classList.add("hide")
        document.querySelector(".tela2").classList.remove("hide")
}

function novamente(event){
    event.preventDefault()

        document.querySelector(".tela2").classList.add("hide")
        document.querySelector(".tela1").classList.remove("hide")
        location.reload()
}






// document.querySelector("tela1").classList.add("hide")
// document.querySelector("tela2").classList.remove("hide")